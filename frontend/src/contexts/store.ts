import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createLoggedInSlice, LoggedInState } from './slices/loggedInSlice';
import { createUserSlice, UserState } from './slices/userSlices';
import { createLoginAccessSlice, TAccessToken } from './slices/loginAccessSlice';

interface AppState extends UserState, LoggedInState, TAccessToken {}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set, get, api) => ({
        ...createUserSlice(set, get, api),
        ...createLoggedInSlice(set, get, api),
        ...createLoginAccessSlice(set, get, api)
      }),
      { name: 'app-storage' }
    )
  )
);
