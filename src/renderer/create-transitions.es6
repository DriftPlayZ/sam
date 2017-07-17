import {blendRank, inBlendLength, outBlendLength} from './tables.es6';

import UInt8 from '../types/UInt8.es6';

/**
 * CREATE TRANSITIONS.
 *
 * Linear transitions are now created to smoothly connect each
 * phoeneme. This transition is spread between the ending frames
 * of the old phoneme (outBlendLength), and the beginning frames
 * of the new phoneme (inBlendLength).
 *
 * To determine how many frames to use, the two phonemes are
 * compared using the blendRank[] table. The phoneme with the
 * smaller score is used. In case of a tie, a blend of each is used:
 *
 *      if blendRank[phoneme1] ==  blendRank[phomneme2]
 *          // use lengths from each phoneme
 *          outBlendFrames = outBlend[phoneme1]
 *          inBlendFrames = outBlend[phoneme2]
 *      else if blendRank[phoneme1] < blendRank[phoneme2]
 *          // use lengths from first phoneme
 *          outBlendFrames = outBlendLength[phoneme1]
 *          inBlendFrames = inBlendLength[phoneme1]
 *      else
 *          // use lengths from the second phoneme
 *          // note that in and out are swapped around!
 *          outBlendFrames = inBlendLength[phoneme2]
 *          inBlendFrames = outBlendLength[phoneme2]
 *
 *  Blend lengths can't be less than zero.
 *
 * For most of the parameters, SAM interpolates over the range of the last
 * outBlendFrames-1 and the first inBlendFrames.
 *
 * The exception to this is the Pitch[] parameter, which is interpolates the
 * pitch from the center of the current phoneme to the center of the next
 * phoneme.
 *
 * @param {Uint8Array} pitches
 * @param {Uint8Array} frequency
 * @param {Uint8Array} amplitude
 * @param {Uint8Array} phonemeIndexOutput
 * @param {Uint8Array} phonemeLengthOutput
 *
 * @return {Number}
 */
export default function CreateTransitions(pitches, frequency, amplitude, phonemeIndexOutput, phonemeLengthOutput) {
  //written by me because of different table positions.
  // mem[47] = ...
  // 168=pitches
  // 169=frequency1
  // 170=frequency[1]
  // 171=frequency3
  // 172=amplitude1
  // 173=amplitude2
  // 174=amplitude3
  const Read = (p, Y) => {
    switch(p) {
      case 168: return pitches[Y];
      case 169: return frequency[0][Y];
      case 170: return frequency[1][Y];
      case 171: return frequency[2][Y];
      case 172: return amplitude[0][Y];
      case 173: return amplitude[1][Y];
      case 174: return amplitude[2][Y];
    }

    throw new Error ('Error reading from tables');
  };

  const Write = (p, Y, value) => {
    switch (p) {
      case 168: pitches[Y] = value; return;
      case 169: frequency[0][Y] = value; return;
      case 170: frequency[1][Y] = value; return;
      case 171: frequency[2][Y] = value; return;
      case 172: amplitude[0][Y] = value; return;
      case 173: amplitude[1][Y] = value; return;
      case 174: amplitude[2][Y] = value; return;
    }

    throw new Error ('Error writing to tables');
  };

  // linearly interpolate values
  const interpolate = (width, table, frame, mem53) => {
    let sign      = (mem53 < 0);
    let remainder = Math.abs(mem53) % width;
    let div       = (mem53 / width) | 0;

    let error = 0;
    let pos   = width;

    while (--pos > 0) {
      let val = Read(table, frame) + div;
      error += remainder;
      if (error >= width) {
        // accumulated a whole integer error, so adjust output
        error -= width;
        if (sign) {
          val--;
        } else if (val) {
          // if input is 0, we always leave it alone
          val++;
        }
      }
      Write(table, ++frame, val); // Write updated value back to next frame.
      val += div;
    }
  };

  const interpolate_pitch = (width, pos, mem49, phase3) => {
    // unlike the other values, the pitches[] interpolates from
    // the middle of the current phoneme to the middle of the
    // next phoneme

    // half the width of the current and next phoneme
    let cur_width  = phonemeLengthOutput[pos] >> 1;
    let next_width = phonemeLengthOutput[pos+1] >> 1;
    // sum the values
    width = cur_width + next_width;
    let pitch = pitches[next_width + mem49] - pitches[mem49 - cur_width];
    interpolate(width, 168, phase3, pitch);
  };

  let phase1;
  let phase2;
  let mem49 = new UInt8(0);
  let pos = new UInt8(0);
  while(1) {
    let phoneme      = phonemeIndexOutput[pos.get()];
    let next_phoneme = phonemeIndexOutput[pos.get()+1];

    if (next_phoneme === 255) {
      break; // 255 == end_token
    }

    // get the ranking of each phoneme
    let next_rank = blendRank[next_phoneme];
    let rank      = blendRank[phoneme];

    // compare the rank - lower rank value is stronger
    if (rank === next_rank) {
      // same rank, so use out blend lengths from each phoneme
      phase1 = outBlendLength[phoneme];
      phase2 = outBlendLength[next_phoneme];
    } else if (rank < next_rank) {
      // next phoneme is stronger, so us its blend lengths
      phase1 = inBlendLength[next_phoneme];
      phase2 = outBlendLength[next_phoneme];
    } else {
      // current phoneme is stronger, so use its blend lengths
      // note the out/in are swapped
      phase1 = outBlendLength[phoneme];
      phase2 = inBlendLength[phoneme];
    }

    mem49.inc(phonemeLengthOutput[pos.get()]);

    let speedcounter = new UInt8(mem49.get() + phase2);
    let phase3       = new UInt8(mem49.get() - phase1);
    let transition   = new UInt8(phase1 + phase2); // total transition?

    if (((transition.get() - 2) & 128) === 0) {
      interpolate_pitch(transition.get(), pos.get(), mem49.get(), phase3.get());
      let table = 169;
      while (table < 175) {
        // tables:
        // 168  pitches[]
        // 169  frequency1
        // 170  frequency[1]
        // 171  frequency3
        // 172  amplitude1
        // 173  amplitude2
        // 174  amplitude3

        let value = Read(table, speedcounter.get()) - Read(table, phase3.get());
        interpolate(transition.get(), table, phase3.get(), value);
        table++;
      }
    }
    pos.inc();
  }

  // add the length of this phoneme
  return (mem49.get() + phonemeLengthOutput[pos.get()]) & 0xFF;
}