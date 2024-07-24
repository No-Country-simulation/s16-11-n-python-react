import { StateCreator } from 'zustand';

export interface UserState {
  name: string | null;
  user: string | null;
  email: string | null;
  setName: (name: string) => void;
  setUser: (user: string) => void;
  setEmail: (email: string) => void;
}

export const createUserSlice: StateCreator<UserState, [], [], UserState> = (set) => ({
  name: null,
  user: null,
  email: null,
  setName: (name) => set({ name }),
  setUser: (user) => set({ user }),
  setEmail: (email) => set({ email }),
});
