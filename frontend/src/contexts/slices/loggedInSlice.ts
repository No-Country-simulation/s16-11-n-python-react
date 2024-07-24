import { StateCreator } from "zustand";

export interface LoggedInState {
  isLoggedIn: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

export const createLoggedInSlice: StateCreator<LoggedInState, [], [], LoggedInState> = (set) => ({
  isLoggedIn: false,
  setLogin: () => set((state) => ({ isLoggedIn: (state.isLoggedIn = true) })),
  setLogout: () => set((state) => ({ isLoggedIn: (state.isLoggedIn = false) })),
});
