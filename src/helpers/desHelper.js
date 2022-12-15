import { crypto } from "../lib/DES";

export const encryptHelper = (plaintext, key) => {
  return crypto(plaintext, key, 0);
};

export const decryptHelper = (ciphertext, key) => {
  return crypto(ciphertext, key, 1);
};
