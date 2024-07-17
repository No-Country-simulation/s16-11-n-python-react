import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createRegisterSlice, RegisterState } from "./slices/registerSlice";
import { createUserSlice, UserState } from "./slices/userSlices";

interface AppState extends UserState, RegisterState {}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set, get, api) => ({
        ...createUserSlice(set, get, api),
        ...createRegisterSlice(set, get, api),
      }),
      { name: "app-storage" }
    )
  )
);
