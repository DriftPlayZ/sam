// Values substituted for zero bits in unvoiced consonant samples.
// tab48426
export const sampledConsonantValues0 = [0x18, 0x1A, 0x17, 0x17, 0x17];

export const stressPitch_tab47492 = [
  0x00, 0xE0, 0xE6, 0xEC, 0xF3, 0xF9, 0x00, 0x06, 0xC, 0x06
];

// Used to decide which phoneme's blend lengths. The candidate with the lower score is selected.
// tab45856
export const blendRank = [
  0x00, 0x1F, 0x1F, 0x1F, 0x1F, 0x02, 0x02, 0x02,
  0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x05, 0x05,
  0x02, 0x0A, 0x02, 0x08, 0x05, 0x05, 0x0B, 0x0A,
  0x09, 0x08, 0x08, 0xA0, 0x08, 0x08, 0x17, 0x1F,
  0x12, 0x12, 0x12, 0x12, 0x1E, 0x1E, 0x14, 0x14,
  0x14, 0x14, 0x17, 0x17, 0x1A, 0x1A, 0x1D, 0x1D,
  0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x1A, 0x1D,
  0x1B, 0x1A, 0x1D, 0x1B, 0x1A, 0x1D, 0x1B, 0x1A,
  0x1D, 0x1B, 0x17, 0x1D, 0x17, 0x17, 0x1D, 0x17,
  0x17, 0x1D, 0x17, 0x17, 0x1D, 0x17, 0x17, 0x17
];

// Number of frames at the end of a phoneme devoted to interpolating to next phoneme's final value
//tab45696
export const outBlendLength = [
  0x00, 0x02, 0x02, 0x02, 0x02, 0x04, 0x04, 0x04,
  0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
  0x04, 0x04, 0x03, 0x02, 0x04, 0x04, 0x02, 0x02,
  0x02, 0x02, 0x02, 0x01, 0x01, 0x01, 0x01, 0x01,
  0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x02, 0x02,
  0x02, 0x01, 0x00, 0x01, 0x00, 0x01, 0x00, 0x05,
  0x05, 0x05, 0x05, 0x05, 0x04, 0x04, 0x02, 0x00,
  0x01, 0x02, 0x00, 0x01, 0x02, 0x00, 0x01, 0x02,
  0x00, 0x01, 0x02, 0x00, 0x02, 0x02, 0x00, 0x01,
  0x03, 0x00, 0x02, 0x03, 0x00, 0x02, 0xA0, 0xA0
];

// Number of frames at beginning of a phoneme devoted to interpolating to phoneme's final value
// tab45776
export const inBlendLength = [
  0x00, 0x02, 0x02, 0x02, 0x02, 0x04, 0x04, 0x04,
  0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
  0x04, 0x04, 0x03, 0x03, 0x04, 0x04, 0x03, 0x03,
  0x03, 0x03, 0x03, 0x01, 0x02, 0x03, 0x02, 0x01,
  0x03, 0x03, 0x03, 0x03, 0x01, 0x01, 0x03, 0x03,
  0x03, 0x02, 0x02, 0x03, 0x02, 0x03, 0x00, 0x00,
  0x05, 0x05, 0x05, 0x05, 0x04, 0x04, 0x02, 0x00,
  0x02, 0x02, 0x00, 0x03, 0x02, 0x00, 0x04, 0x02,
  0x00, 0x03, 0x02, 0x00, 0x02, 0x02, 0x00, 0x02,
  0x03, 0x00, 0x03, 0x03, 0x00, 0x03, 0xB0, 0xA0
];

// Consists of two bitfields:
// Low 3 bits (masked by 7) select a 256-byte section in sampleTable,
// as well as index into sampledConsonantValues0 for unvoiced.
// High 5 bits (masked by 248 = 11111000), for unvoiced,
// give inverted offset within the 256-byte section.
//
// 32: S*    241         11110001
// 33: SH    226         11100010
// 34: F*    211         11010011
// 35: TH    187         10111011
// 36: /H    124         01111100
// 37: /X    149         10010101
// 38: Z*    1           00000001
// 39: ZH    2           00000010
// 40: V*    3           00000011
// 41: DH    3           00000011
// 43: CH'   114         01110010
// 45: J'    2           00000010
// 67: P'    27          00011011
// 70: T'    25          00011001
// tab45936
export const sampledConsonantFlags = [
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0xF1, 0xE2, 0xD3, 0xBB, 0x7C, 0x95, 0x01, 0x02,
  0x03, 0x03, 0x00, 0x72, 0x00, 0x02, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x1B, 0x00, 0x00, 0x19, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
];

//
export const frequencyData = [
//tab45056 |tab451356 |tab45216
//  freq1  |  freq2   |  freq3
  0x000000 | 0x000000 | 0x000000, // ' *' 00
  0x000013 | 0x004300 | 0x5B0000, // '.*' 01
  0x000013 | 0x004300 | 0x5B0000, // '?*' 02
  0x000013 | 0x004300 | 0x5B0000, // ',*' 03
  0x000013 | 0x004300 | 0x5B0000, // '-*' 04
  0x00000A | 0x005400 | 0x6E0000, // 'IY' 05
  0x00000E | 0x004800 | 0x5D0000, // 'IH' 06
  0x000012 | 0x004200 | 0x5B0000, // 'EH' 07
  0x000018 | 0x003E00 | 0x580000, // 'AE' 08
  0x00001A | 0x002800 | 0x590000, // 'AA' 09
  0x000016 | 0x002C00 | 0x570000, // 'AH' 10
  0x000014 | 0x001E00 | 0x580000, // 'AO' 11
  0x000010 | 0x002400 | 0x520000, // 'UH' 12
  0x000014 | 0x002C00 | 0x590000, // 'AX' 13
  0x00000E | 0x004800 | 0x5D0000, // 'IX' 14
  0x000012 | 0x003000 | 0x3E0000, // 'ER' 15
  0x00000E | 0x002400 | 0x520000, // 'UX' 16
  0x000012 | 0x001E00 | 0x580000, // 'OH' 17
  0x000012 | 0x003200 | 0x3E0000, // 'RX' 18
  0x000010 | 0x002400 | 0x6E0000, // 'LX' 19
  0x00000C | 0x001C00 | 0x500000, // 'WX' 20
  0x00000E | 0x004400 | 0x5D0000, // 'YX' 21
  0x00000A | 0x001800 | 0x5A0000, // 'WH' 22
  0x000012 | 0x003200 | 0x3C0000, // 'R*' 23
  0x00000E | 0x001E00 | 0x6E0000, // 'L*' 24
  0x00000A | 0x001800 | 0x5A0000, // 'W*' 25
  0x000008 | 0x005200 | 0x6E0000, // 'Y*' 26
  0x000006 | 0x002E00 | 0x510000, // 'M*' 27
  0x000006 | 0x003600 | 0x790000, // 'N*' 28
  0x000006 | 0x005600 | 0x650000, // 'NX' 29
  0x000006 | 0x003600 | 0x790000, // 'DX' 30
  0x000011 | 0x004300 | 0x5B0000, // 'Q*' 31
  0x000006 | 0x004900 | 0x630000, // 'S*' 32
  0x000006 | 0x004F00 | 0x6A0000, // 'SH' 33
  0x000006 | 0x001A00 | 0x510000, // 'F*' 34
  0x000006 | 0x004200 | 0x790000, // 'TH' 35
  0x00000E | 0x004900 | 0x5D0000, // '/H' 36
  0x000010 | 0x002500 | 0x520000, // '/X' 37
  0x000009 | 0x003300 | 0x5D0000, // 'Z*' 38
  0x00000A | 0x004200 | 0x670000, // 'ZH' 39
  0x000008 | 0x002800 | 0x4C0000, // 'V*' 40
  0x00000A | 0x002F00 | 0x5D0000, // 'DH' 41
  0x000006 | 0x004F00 | 0x650000, // 'CH' 42
  0x000006 | 0x004F00 | 0x650000, // '**' 43
  0x000006 | 0x004200 | 0x790000, // 'J*' 44
  0x000005 | 0x004F00 | 0x650000, // '**' 45
  0x000006 | 0x006E00 | 0x790000, // '**' 46
  0x000000 | 0x000000 | 0x000000, // '**' 47
  0x000012 | 0x004800 | 0x5A0000, // 'EY' 48
  0x00001A | 0x002600 | 0x580000, // 'AY' 49
  0x000014 | 0x001E00 | 0x580000, // 'OY' 50
  0x00001A | 0x002A00 | 0x580000, // 'AW' 51
  0x000012 | 0x001E00 | 0x580000, // 'OW' 52
  0x00000C | 0x002200 | 0x520000, // 'UW' 53
  0x000006 | 0x001A00 | 0x510000, // 'B*' 54
  0x000006 | 0x001A00 | 0x510000, // '**' 55
  0x000006 | 0x001A00 | 0x510000, // '**' 56
  0x000006 | 0x004200 | 0x790000, // 'D*' 57
  0x000006 | 0x004200 | 0x790000, // '**' 58
  0x000006 | 0x004200 | 0x790000, // '**' 59
  0x000006 | 0x006E00 | 0x700000, // 'G*' 60
  0x000006 | 0x006E00 | 0x6E0000, // '**' 61
  0x000006 | 0x006E00 | 0x6E0000, // '**' 62
  0x000006 | 0x005400 | 0x5E0000, // 'GX' 63
  0x000006 | 0x005400 | 0x5E0000, // '**' 64
  0x000006 | 0x005400 | 0x5E0000, // '**' 65
  0x000006 | 0x001A00 | 0x510000, // 'P*' 66
  0x000006 | 0x001A00 | 0x510000, // '**' 67
  0x000006 | 0x001A00 | 0x510000, // '**' 68
  0x000006 | 0x004200 | 0x790000, // 'T*' 69
  0x000006 | 0x004200 | 0x790000, // '**' 70
  0x000006 | 0x004200 | 0x790000, // '**' 71
  0x000006 | 0x006D00 | 0x650000, // 'K*' 72
  0x00000A | 0x005600 | 0x650000, // '**' 73
  0x00000A | 0x006D00 | 0x700000, // '**' 74
  0x000006 | 0x005400 | 0x5E0000, // 'KX' 75
  0x000006 | 0x005400 | 0x5E0000, // '**' 76
  0x000006 | 0x005400 | 0x5E0000, // '**' 77
  0x00002C | 0x007F00 | 0x080000, // 'UL' 78
  0x000013 | 0x007F00 | 0x010000  // 'UM' 79
];

/**
 *
 * ampl1data[X] =  ampldata[X]        & 0xFF; // F1 amplitude
 * ampl2data[X] = (ampldata[X] >> 8)  & 0xFF; // F2 amplitude
 * ampl3data[X] = (ampldata[X] >> 16) & 0xFF; // F3 amplitude
 */
export const ampldata = [
// ampl1   | ampl2    | ampl3
  0x000000 | 0x000000 | 0x000000, // ' *' 00
  0x000000 | 0x000000 | 0x000000, // '.*' 01
  0x000000 | 0x000000 | 0x000000, // '?*' 02
  0x000000 | 0x000000 | 0x000000, // ',*' 03
  0x000000 | 0x000000 | 0x000000, // '-*' 04
  0x00000D | 0x000A00 | 0x080000, // 'IY' 05
  0x00000D | 0x000B00 | 0x070000, // 'IH' 06
  0x00000E | 0x000D00 | 0x080000, // 'EH' 07
  0x00000F | 0x000E00 | 0x080000, // 'AE' 08
  0x00000F | 0x000D00 | 0x010000, // 'AA' 09
  0x00000F | 0x000C00 | 0x010000, // 'AH' 10
  0x00000F | 0x000C00 | 0x000000, // 'AO' 11
  0x00000F | 0x000B00 | 0x010000, // 'UH' 12
  0x00000C | 0x000900 | 0x000000, // 'AX' 13
  0x00000D | 0x000B00 | 0x070000, // 'IX' 14
  0x00000C | 0x000B00 | 0x050000, // 'ER' 15
  0x00000F | 0x000C00 | 0x010000, // 'UX' 16
  0x00000F | 0x000C00 | 0x000000, // 'OH' 17
  0x00000D | 0x000C00 | 0x060000, // 'RX' 18
  0x00000D | 0x000800 | 0x010000, // 'LX' 19
  0x00000D | 0x000800 | 0x000000, // 'WX' 20
  0x00000E | 0x000C00 | 0x070000, // 'YX' 21
  0x00000D | 0x000800 | 0x000000, // 'WH' 22
  0x00000C | 0x000A00 | 0x050000, // 'R*' 23
  0x00000D | 0x000800 | 0x010000, // 'L*' 24
  0x00000D | 0x000800 | 0x000000, // 'W*' 25
  0x00000D | 0x000A00 | 0x080000, // 'Y*' 26
  0x00000C | 0x000300 | 0x000000, // 'M*' 27
  0x000009 | 0x000900 | 0x000000, // 'N*' 28
  0x000009 | 0x000600 | 0x030000, // 'NX' 29
  0x000000 | 0x000000 | 0x000000, // 'DX' 30
  0x000000 | 0x000000 | 0x000000, // 'Q*' 31
  0x000000 | 0x000000 | 0x000000, // 'S*' 32
  0x000000 | 0x000000 | 0x000000, // 'SH' 33
  0x000000 | 0x000000 | 0x000000, // 'F*' 34
  0x000000 | 0x000000 | 0x000000, // 'TH' 35
  0x000000 | 0x000000 | 0x000000, // '/H' 36
  0x000000 | 0x000000 | 0x000000, // '/X' 37
  0x00000B | 0x000300 | 0x000000, // 'Z*' 38
  0x00000B | 0x000500 | 0x010000, // 'ZH' 39
  0x00000B | 0x000300 | 0x000000, // 'V*' 40
  0x00000B | 0x000400 | 0x000000, // 'DH' 41
  0x000000 | 0x000000 | 0x000000, // 'CH' 42
  0x000000 | 0x000000 | 0x000000, // '**' 43
  0x000001 | 0x000000 | 0x000000, // 'J*' 44
  0x00000B | 0x000500 | 0x010000, // '**' 45
  0x000000 | 0x000A00 | 0x0E0000, // '**' 46
  0x000002 | 0x000200 | 0x010000, // '**' 47
  0x00000E | 0x000E00 | 0x090000, // 'EY' 48
  0x00000F | 0x000D00 | 0x010000, // 'AY' 49
  0x00000F | 0x000C00 | 0x000000, // 'OY' 50
  0x00000F | 0x000D00 | 0x010000, // 'AW' 51
  0x00000F | 0x000C00 | 0x000000, // 'OW' 52
  0x00000D | 0x000800 | 0x000000, // 'UW' 53
  0x000002 | 0x000000 | 0x000000, // 'B*' 54
  0x000004 | 0x000100 | 0x000000, // '**' 55
  0x000000 | 0x000000 | 0x000000, // '**' 56
  0x000002 | 0x000000 | 0x000000, // 'D*' 57
  0x000004 | 0x000100 | 0x000000, // '**' 58
  0x000000 | 0x000000 | 0x000000, // '**' 59
  0x000001 | 0x000000 | 0x000000, // 'G*' 60
  0x000004 | 0x000100 | 0x000000, // '**' 61
  0x000000 | 0x000000 | 0x000000, // '**' 62
  0x000001 | 0x000000 | 0x000000, // 'GX' 63
  0x000004 | 0x000100 | 0x000000, // '**' 64
  0x000000 | 0x000000 | 0x000000, // '**' 65
  0x000000 | 0x000000 | 0x000000, // 'P*' 66
  0x000000 | 0x000000 | 0x000000, // '**' 67
  0x000000 | 0x000000 | 0x000000, // '**' 68
  0x000000 | 0x000000 | 0x000000, // 'T*' 69
  0x000000 | 0x000000 | 0x000000, // '**' 70
  0x000000 | 0x000000 | 0x000000, // '**' 71
  0x000000 | 0x000000 | 0x000000, // 'K*' 72
  0x00000C | 0x000A00 | 0x070000, // '**' 73
  0x000000 | 0x000000 | 0x000000, // '**' 74
  0x000000 | 0x000000 | 0x000000, // 'KX' 75
  0x000000 | 0x000A00 | 0x050000, // '**' 76
  0x000000 | 0x000000 | 0x000000, // '**' 77
  0x00000F | 0x000000 | 0x130000, // 'UL' 78
  0x00000F | 0x000000 | 0x100000  // 'UM' 79
];

// Sampled data for consonants, consisting of five 256-byte sections
export const sampleTable = [
  //00  T', S, Z  (coronal)
  0x38, 0x84, 0x6B, 0x19, 0xC6, 0x63, 0x18, 0x86,
  0x73, 0x98, 0xC6, 0xB1, 0x1C, 0xCA, 0x31, 0x8C,
  0xC7, 0x31, 0x88, 0xC2, 0x30, 0x98, 0x46, 0x31,
  0x18, 0xC6, 0x35, 0x0C, 0xCA, 0x31, 0x0C, 0xC6,
  //20
  0x21, 0x10, 0x24, 0x69, 0x12, 0xC2, 0x31, 0x14,
  0xC4, 0x71, 0x08, 0x4A, 0x22, 0x49, 0xAB, 0x6A,
  0xA8, 0xAC, 0x49, 0x51, 0x32, 0xD5, 0x52, 0x88,
  0x93, 0x6C, 0x94, 0x22, 0x15, 0x54, 0xD2, 0x25,
  //40
  0x96, 0xD4, 0x50, 0xA5, 0x46, 0x21, 0x08, 0x85,
  0x6B, 0x18, 0xC4, 0x63, 0x10, 0xCE, 0x6B, 0x18,
  0x8C, 0x71, 0x19, 0x8C, 0x63, 0x35, 0x0C, 0xC6,
  0x33, 0x99, 0xCC, 0x6C, 0xB5, 0x4E, 0xA2, 0x99,
  //60
  0x46, 0x21, 0x28, 0x82, 0x95, 0x2E, 0xE3, 0x30,
  0x9C, 0xC5, 0x30, 0x9C, 0xA2, 0xB1, 0x9C, 0x67,
  0x31, 0x88, 0x66, 0x59, 0x2C, 0x53, 0x18, 0x84,
  0x67, 0x50, 0xCA, 0xE3, 0x0A, 0xAC, 0xAB, 0x30,
  //80
  0xAC, 0x62, 0x30, 0x8C, 0x63, 0x10, 0x94, 0x62,
  0xB1, 0x8C, 0x82, 0x28, 0x96, 0x33, 0x98, 0xD6,
  0xB5, 0x4C, 0x62, 0x29, 0xA5, 0x4A, 0xB5, 0x9C,
  0xC6, 0x31, 0x14, 0xD6, 0x38, 0x9C, 0x4B, 0xB4,
  //A0
  0x86, 0x65, 0x18, 0xAE, 0x67, 0x1C, 0xA6, 0x63,
  0x19, 0x96, 0x23, 0x19, 0x84, 0x13, 0x08, 0xA6,
  0x52, 0xAC, 0xCA, 0x22, 0x89, 0x6E, 0xAB, 0x19,
  0x8C, 0x62, 0x34, 0xC4, 0x62, 0x19, 0x86, 0x63,
  //C0
  0x18, 0xC4, 0x23, 0x58, 0xD6, 0xA3, 0x50, 0x42,
  0x54, 0x4A, 0xAD, 0x4A, 0x25, 0x11, 0x6B, 0x64,
  0x89, 0x4A, 0x63, 0x39, 0x8A, 0x23, 0x31, 0x2A,
  0xEA, 0xA2, 0xA9, 0x44, 0xC5, 0x12, 0xCD, 0x42,
  //E0
  0x34, 0x8C, 0x62, 0x18, 0x8C, 0x63, 0x11, 0x48,
  0x66, 0x31, 0x9D, 0x44, 0x33, 0x1D, 0x46, 0x31,
  0x9C, 0xC6, 0xB1, 0x0C, 0xCD, 0x32, 0x88, 0xC4,
  0x73, 0x18, 0x86, 0x73, 0x08, 0xD6, 0x63, 0x58,
  //100 CH', J', SH, ZH  (palato-alveolar)
  0x07, 0x81, 0xE0, 0xF0, 0x3C, 0x07, 0x87, 0x90,
  0x3C, 0x7C, 0x0F, 0xC7, 0xC0, 0xC0, 0xF0, 0x7C,
  0x1E, 0x07, 0x80, 0x80, 0x00, 0x1C, 0x78, 0x70,
  0xF1, 0xC7, 0x1F, 0xC0, 0x0C, 0xFE, 0x1C, 0x1F,
  //120
  0x1F, 0x0E, 0x0A, 0x7A, 0xC0, 0x71, 0xF2, 0x83,
  0x8F, 0x03, 0x0F, 0x0F, 0x0C, 0x00, 0x79, 0xF8,
  0x61, 0xE0, 0x43, 0x0F, 0x83, 0xE7, 0x18, 0xF9,
  0xC1, 0x13, 0xDA, 0xE9, 0x63, 0x8F, 0x0F, 0x83,
  //140
  0x83, 0x87, 0xC3, 0x1F, 0x3C, 0x70, 0xF0, 0xE1,
  0xE1, 0xE3, 0x87, 0xB8, 0x71, 0x0E, 0x20, 0xE3,
  0x8D, 0x48, 0x78, 0x1C, 0x93, 0x87, 0x30, 0xE1,
  0xC1, 0xC1, 0xE4, 0x78, 0x21, 0x83, 0x83, 0xC3,
  //160
  0x87, 0x06, 0x39, 0xE5, 0xC3, 0x87, 0x07, 0x0E,
  0x1C, 0x1C, 0x70, 0xF4, 0x71, 0x9C, 0x60, 0x36,
  0x32, 0xC3, 0x1E, 0x3C, 0xF3, 0x8F, 0x0E, 0x3C,
  0x70, 0xE3, 0xC7, 0x8F, 0x0F, 0x0F, 0x0E, 0x3C,
  //180
  0x78, 0xF0, 0xE3, 0x87, 0x06, 0xF0, 0xE3, 0x07,
  0xC1, 0x99, 0x87, 0x0F, 0x18, 0x78, 0x70, 0x70,
  0xFC, 0xF3, 0x10, 0xB1, 0x8C, 0x8C, 0x31, 0x7C,
  0x70, 0xE1, 0x86, 0x3C, 0x64, 0x6C, 0xB0, 0xE1,
  //1A0
  0xE3, 0x0F, 0x23, 0x8F, 0x0F, 0x1E, 0x3E, 0x38,
  0x3C, 0x38, 0x7B, 0x8F, 0x07, 0x0E, 0x3C, 0xF4,
  0x17, 0x1E, 0x3C, 0x78, 0xF2, 0x9E, 0x72, 0x49,
  0xE3, 0x25, 0x36, 0x38, 0x58, 0x39, 0xE2, 0xDE,
  //1C0
  0x3C, 0x78, 0x78, 0xE1, 0xC7, 0x61, 0xE1, 0xE1,
  0xB0, 0xF0, 0xF0, 0xC3, 0xC7, 0x0E, 0x38, 0xC0,
  0xF0, 0xCE, 0x73, 0x73, 0x18, 0x34, 0xB0, 0xE1,
  0xC7, 0x8E, 0x1C, 0x3C, 0xF8, 0x38, 0xF0, 0xE1,
  //1E0
  0xC1, 0x8B, 0x86, 0x8F, 0x1C, 0x78, 0x70, 0xF0,
  0x78, 0xAC, 0xB1, 0x8F, 0x39, 0x31, 0xDB, 0x38,
  0x61, 0xC3, 0x0E, 0x0E, 0x38, 0x78, 0x73, 0x17,
  0x1E, 0x39, 0x1E, 0x38, 0x64, 0xE1, 0xF1, 0xC1,
  //200 P', F, V, TH, DH  ([labio]dental)
  0x4E, 0x0F, 0x40, 0xA2, 0x02, 0xC5, 0x8F, 0x81,
  0xA1, 0xFC, 0x12, 0x08, 0x64, 0xE0, 0x3C, 0x22,
  0xE0, 0x45, 0x07, 0x8E, 0x0C, 0x32, 0x90, 0xF0,
  0x1F, 0x20, 0x49, 0xE0, 0xF8, 0x0C, 0x60, 0xF0,
  //220
  0x17, 0x1A, 0x41, 0xAA, 0xA4, 0xD0, 0x8D, 0x12,
  0x82, 0x1E, 0x1E, 0x03, 0xF8, 0x3E, 0x03, 0x0C,
  0x73, 0x80, 0x70, 0x44, 0x26, 0x03, 0x24, 0xE1,
  0x3E, 0x04, 0x4E, 0x04, 0x1C, 0xC1, 0x09, 0xCC,
  //240
  0x9E, 0x90, 0x21, 0x07, 0x90, 0x43, 0x64, 0xC0,
  0x0F, 0xC6, 0x90, 0x9C, 0xC1, 0x5B, 0x03, 0xE2,
  0x1D, 0x81, 0xE0, 0x5E, 0x1D, 0x03, 0x84, 0xB8,
  0x2C, 0x0F, 0x80, 0xB1, 0x83, 0xE0, 0x30, 0x41,
  //260
  0x1E, 0x43, 0x89, 0x83, 0x50, 0xFC, 0x24, 0x2E,
  0x13, 0x83, 0xF1, 0x7C, 0x4C, 0x2C, 0xC9, 0x0D,
  0x83, 0xB0, 0xB5, 0x82, 0xE4, 0xE8, 0x06, 0x9C,
  0x07, 0xA0, 0x99, 0x1D, 0x07, 0x3E, 0x82, 0x8F,
  //280
  0x70, 0x30, 0x74, 0x40, 0xCA, 0x10, 0xE4, 0xE8,
  0x0F, 0x92, 0x14, 0x3F, 0x06, 0xF8, 0x84, 0x88,
  0x43, 0x81, 0x0A, 0x34, 0x39, 0x41, 0xC6, 0xE3,
  0x1C, 0x47, 0x03, 0xB0, 0xB8, 0x13, 0x0A, 0xC2,
  //2A0
  0x64, 0xF8, 0x18, 0xF9, 0x60, 0xB3, 0xC0, 0x65,
  0x20, 0x60, 0xA6, 0x8C, 0xC3, 0x81, 0x20, 0x30,
  0x26, 0x1E, 0x1C, 0x38, 0xD3, 0x01, 0xB0, 0x26,
  0x40, 0xF4, 0x0B, 0xC3, 0x42, 0x1F, 0x85, 0x32,
  //2C0
  0x26, 0x60, 0x40, 0xC9, 0xCB, 0x01, 0xEC, 0x11,
  0x28, 0x40, 0xFA, 0x04, 0x34, 0xE0, 0x70, 0x4C,
  0x8C, 0x1D, 0x07, 0x69, 0x03, 0x16, 0xC8, 0x04,
  0x23, 0xE8, 0xC6, 0x9A, 0x0B, 0x1A, 0x03, 0xE0,
  //2E0
  0x76, 0x06, 0x05, 0xCF, 0x1E, 0xBC, 0x58, 0x31,
  0x71, 0x66, 0x00, 0xF8, 0x3F, 0x04, 0xFC, 0x0C,
  0x74, 0x27, 0x8A, 0x80, 0x71, 0xC2, 0x3A, 0x26,
  0x06, 0xC0, 0x1F, 0x05, 0x0F, 0x98, 0x40, 0xAE,
  //300 /H  (palatal)
  0x01, 0x7F, 0xC0, 0x07, 0xFF, 0x00, 0x0E, 0xFE,
  0x00, 0x03, 0xDF, 0x80, 0x03, 0xEF, 0x80, 0x1B,
  0xF1, 0xC2, 0x00, 0xE7, 0xE0, 0x18, 0xFC, 0xE0,
  0x21, 0xFC, 0x80, 0x3C, 0xFC, 0x40, 0x0E, 0x7E,
  //320
  0x00, 0x3F, 0x3E, 0x00, 0x0F, 0xFE, 0x00, 0x1F,
  0xFF, 0x00, 0x3E, 0xF0, 0x07, 0xFC, 0x00, 0x7E,
  0x10, 0x3F, 0xFF, 0x00, 0x3F, 0x38, 0x0E, 0x7C,
  0x01, 0x87, 0x0C, 0xFC, 0xC7, 0x00, 0x3E, 0x04,
  //340
  0x0F, 0x3E, 0x1F, 0x0F, 0x0F, 0x1F, 0x0F, 0x02,
  0x83, 0x87, 0xCF, 0x03, 0x87, 0x0F, 0x3F, 0xC0,
  0x07, 0x9E, 0x60, 0x3F, 0xC0, 0x03, 0xFE, 0x00,
  0x3F, 0xE0, 0x77, 0xE1, 0xC0, 0xFE, 0xE0, 0xC3,
  //360
  0xE0, 0x01, 0xDF, 0xF8, 0x03, 0x07, 0x00, 0x7E,
  0x70, 0x00, 0x7C, 0x38, 0x18, 0xFE, 0x0C, 0x1E,
  0x78, 0x1C, 0x7C, 0x3E, 0x0E, 0x1F, 0x1E, 0x1E,
  0x3E, 0x00, 0x7F, 0x83, 0x07, 0xDB, 0x87, 0x83,
  //380
  0x07, 0xC7, 0x07, 0x10, 0x71, 0xFF, 0x00, 0x3F,
  0xE2, 0x01, 0xE0, 0xC1, 0xC3, 0xE1, 0x00, 0x7F,
  0xC0, 0x05, 0xF0, 0x20, 0xF8, 0xF0, 0x70, 0xFE,
  0x78, 0x79, 0xF8, 0x02, 0x3F, 0x0C, 0x8F, 0x03,
  //3a0
  0x0F, 0x9F, 0xE0, 0xC1, 0xC7, 0x87, 0x03, 0xC3,
  0xC3, 0xB0, 0xE1, 0xE1, 0xC1, 0xE3, 0xE0, 0x71,
  0xF0, 0x00, 0xFC, 0x70, 0x7C, 0x0C, 0x3E, 0x38,
  0x0E, 0x1C, 0x70, 0xC3, 0xC7, 0x03, 0x81, 0xC1,
  //3c0
  0xC7, 0xE7, 0x00, 0x0F, 0xC7, 0x87, 0x19, 0x09,
  0xEF, 0xC4, 0x33, 0xE0, 0xC1, 0xFC, 0xF8, 0x70,
  0xF0, 0x78, 0xF8, 0xF0, 0x61, 0xC7, 0x00, 0x1F,
  0xF8, 0x01, 0x7C, 0xF8, 0xF0, 0x78, 0x70, 0x3C,
  //3e0
  0x7C, 0xCE, 0x0E, 0x21, 0x83, 0xCF, 0x08, 0x07,
  0x8F, 0x08, 0xC1, 0x87, 0x8F, 0x80, 0xC7, 0xE3,
  0x00, 0x07, 0xF8, 0xE0, 0xEF, 0x00, 0x39, 0xF7,
  0x80, 0x0E, 0xF8, 0xE1, 0xE3, 0xF8, 0x21, 0x9F,
  //400 /X  (glottal)
  0xC0, 0xFF, 0x03, 0xF8, 0x07, 0xC0, 0x1F, 0xF8,
  0xC4, 0x04, 0xFC, 0xC4, 0xC1, 0xBC, 0x87, 0xF0,
  0x0F, 0xC0, 0x7F, 0x05, 0xE0, 0x25, 0xEC, 0xC0,
  0x3E, 0x84, 0x47, 0xF0, 0x8E, 0x03, 0xF8, 0x03,
  //420
  0xFB, 0xC0, 0x19, 0xF8, 0x07, 0x9C, 0x0C, 0x17,
  0xF8, 0x07, 0xE0, 0x1F, 0xA1, 0xFC, 0x0F, 0xFC,
  0x01, 0xF0, 0x3F, 0x00, 0xFE, 0x03, 0xF0, 0x1F,
  0x00, 0xFD, 0x00, 0xFF, 0x88, 0x0D, 0xF9, 0x01,
  //440
  0xFF, 0x00, 0x70, 0x07, 0xC0, 0x3E, 0x42, 0xF3,
  0x0D, 0xC4, 0x7F, 0x80, 0xFC, 0x07, 0xF0, 0x5E,
  0xC0, 0x3F, 0x00, 0x78, 0x3F, 0x81, 0xFF, 0x01,
  0xF8, 0x01, 0xC3, 0xE8, 0x0C, 0xE4, 0x64, 0x8F,
  //460
  0xE4, 0x0F, 0xF0, 0x07, 0xF0, 0xC2, 0x1F, 0x00,
  0x7F, 0xC0, 0x6F, 0x80, 0x7E, 0x03, 0xF8, 0x07,
  0xF0, 0x3F, 0xC0, 0x78, 0x0F, 0x82, 0x07, 0xFE,
  0x22, 0x77, 0x70, 0x02, 0x76, 0x03, 0xFE, 0x00,
  //480
  0xFE, 0x67, 0x00, 0x7C, 0xC7, 0xF1, 0x8E, 0xC6,
  0x3B, 0xE0, 0x3F, 0x84, 0xF3, 0x19, 0xD8, 0x03,
  0x99, 0xFC, 0x09, 0xB8, 0x0F, 0xF8, 0x00, 0x9D,
  0x24, 0x61, 0xF9, 0x0D, 0x00, 0xFD, 0x03, 0xF0,
  //4a0
  0x1F, 0x90, 0x3F, 0x01, 0xF8, 0x1F, 0xD0, 0xF,
  0xF8, 0x37, 0x01, 0xF8, 0x07, 0xF0, 0x0F, 0xC0,
  0x3F, 0x00, 0xFE, 0x03, 0xF8, 0x0F, 0xC0, 0x3F,
  0x00, 0xFA, 0x03, 0xF0, 0x0F, 0x80, 0xFF, 0x01,
  //4c0
  0xB8, 0x07, 0xF0, 0x01, 0xFC, 0x01, 0xBC, 0x80,
  0x13, 0x1E, 0x00, 0x7F, 0xE1, 0x40, 0x7F, 0xA0,
  0x7F, 0xB0, 0x00, 0x3F, 0xC0, 0x1F, 0xC0, 0x38,
  0x0F, 0xF0, 0x1F, 0x80, 0xFF, 0x01, 0xFC, 0x03,
  //4e0
  0xF1, 0x7E, 0x01, 0xFE, 0x01, 0xF0, 0xFF, 0x00,
  0x7F, 0xC0, 0x1D, 0x07, 0xF0, 0x0F, 0xC0, 0x7E,
  0x06, 0xE0, 0x07, 0xE0, 0x0F, 0xF8, 0x06, 0xC1,
  0xFE, 0x01, 0xFC, 0x03, 0xE0, 0x0F, 0x00, 0xFC
];
