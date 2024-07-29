import axios from 'axios';
import { API_URL } from '@/utils/config';
import { CourseResponse } from './responses';

export const getCourses = async () => {
  try {
    const { data } = await axios.get<CourseResponse[]>(`${API_URL}/courses/`);

    return data.map((courseItem) => ({
      id: courseItem.id,
      channelId: courseItem.channel_id,
      name: courseItem.title,
      description: courseItem.description ?? '',
      thumbnail: courseItem.title,
      publishedAt: courseItem.published_at,
    }));
  } catch (error) {
    console.error(error);
    throw new Error('Error at login');
  }
};

export const getClasses = async (courseId: string) => {};

export const getAuthors = async () => {};

export const getUserCourses = async () => {};
