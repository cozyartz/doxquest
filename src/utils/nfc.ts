// src/utils/nfc.ts

export const NFC_UID_WHITELIST = [
  "04AABBCCDDEE", // Example UID for special NFC tags
  "04FFEEDDCCBB"
];

export function isNfcUidValid(uid: string): boolean {
  return NFC_UID_WHITELIST.includes(uid.toUpperCase());
}

