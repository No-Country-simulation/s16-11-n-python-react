import { StateCreator } from "zustand";

export interface RegisterState {
  register: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

export const createRegisterSlice: StateCreator<
  RegisterState,
  [],
  [],
  RegisterState
> = (set) => ({
  register: false,
  setLogin: () => set((state) => ({ register: (state.register = true) })),
  setLogout: () => set((state) => ({ register: (state.register = false) })),
});
