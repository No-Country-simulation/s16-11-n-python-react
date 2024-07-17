import { StateCreator } from "zustand";

export interface UserState {
  user: string | null;
  setUser: (user: string) => void;
}

export const createUserSlice: StateCreator<UserState, [], [], UserState> = (
  set
) => ({
  user: null,
  setUser: (user) => set({ user }),
});
