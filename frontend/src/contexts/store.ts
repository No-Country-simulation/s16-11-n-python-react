import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserState, createUserSlice } from "./slices/userSlices";

interface AppState extends UserState {}

export const useStore = create<AppState>()(
	devtools(
		persist(
			(set, get, api) => ({
				...createUserSlice(set, get, api),
			}),
			{ name: "userStore" },
		),
	),
)