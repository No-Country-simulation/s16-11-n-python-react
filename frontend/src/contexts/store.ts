import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createLoggedInSlice, LoggedInState } from './slices/loggedInSlice';
import { createUserSlice, UserState } from './slices/userSlices';

interface AppState extends UserState, LoggedInState {}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set, get, api) => ({
        ...createUserSlice(set, get, api),
        ...createLoggedInSlice(set, get, api),
      }),
      { name: 'app-storage' }
    )
  )
);
