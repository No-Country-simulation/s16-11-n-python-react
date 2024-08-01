import courses from '../mocks/courses.json';

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

export const allCourses = courses.map((courseItem) => ({
  id: courseItem.id,
  channelId: courseItem.channel_id,
  name: courseItem.title,
  description: courseItem.description ?? '',
  thumbnail: courseItem.thumbnail,
  publishedAt: courseItem.published_at,
}));

export const coursesSlice = allCourses.slice(1, 10);

export const randomCourses = getRandomCourses(allCourses, 9);

export const randomCourses2 = getRandomCourses(allCourses, 4);
