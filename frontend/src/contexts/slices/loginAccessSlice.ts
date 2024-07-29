import { StateCreator } from 'zustand';

export type TAccessToken =  {
    accessToken : string | null;
    setAccessToken: (accessToken: string) => void;
}
;

export const createLoginAccessSlice: StateCreator<TAccessToken, [], [], TAccessToken> = (set) => ({
    accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
});
