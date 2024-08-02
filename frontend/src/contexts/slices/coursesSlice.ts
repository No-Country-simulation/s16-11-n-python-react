import { Course } from '@/types/types';
import { StateCreator } from 'zustand';

export interface CoursesState {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
}

export const createCoursesSlice: StateCreator<CoursesState, [], [], CoursesState> = (set) => ({
  courses: [{ id: '', channelId: '', name: '', description: '', thumbnail: '', publishedAt: '' }],
  setCourses: (courses) => set({ courses }),
});
