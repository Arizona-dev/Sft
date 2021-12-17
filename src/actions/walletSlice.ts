export type walletSlice = { type: "CONNECT"; payload: string };

export const connectUserWallet = (pubKey: string): walletSlice => ({
  type: "CONNECT",
  payload: pubKey
});