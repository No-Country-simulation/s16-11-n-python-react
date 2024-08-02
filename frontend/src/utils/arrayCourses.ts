import { Course } from "@/types/types";

function getRandomCourses<T>(arr: T[], num: number): T[] {
  const result: T[] = [];
  const usedIndices = new Set<number>();

  while (result.length < num && result.length < arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (!usedIndices.has(randomIndex)) {
      result.push(arr[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }
  return result;
}

export const coursesSlice = (arr:Course[]) => arr.filter(course => course.thumbnail.toLowerCase().includes('maxresdefault'.toLowerCase()));

export const nineCourses = <T>(arr: T[]) => getRandomCourses(arr, 9);

export const fourCourses = <T>(arr: T[]) => getRandomCourses(arr, 4);
