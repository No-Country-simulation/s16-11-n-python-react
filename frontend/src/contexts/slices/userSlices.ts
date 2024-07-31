import { StateCreator } from 'zustand';

export interface UserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  setFirstName: (name: string) => void;
  setLastName: (user: string) => void;
  setEmail: (email: string) => void;
}

export const createUserSlice: StateCreator<UserState, [], [], UserState> = (set) => ({
  firstName: null,
  lastName: null,
  email: null,
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
});
