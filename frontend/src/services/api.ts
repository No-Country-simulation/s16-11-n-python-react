import axios from 'axios';
import { API_URL } from '@/utils/config';
import { CourseResponse, SingleCourseResponse } from './responses';

export const getCourses = async () => {
  try {
    const { data } = await axios.get<CourseResponse[]>(`${API_URL}/courses/`);

    return data.map((courseItem) => ({
      id: courseItem.id,
      channelId: courseItem.channel_id,
      name: courseItem.title,
      description: courseItem.description ?? '',
      thumbnail: courseItem.thumbnail,
      publishedAt: courseItem.published_at,
    }));
  } catch (error) {
    console.error(error);
    throw new Error('Error at login');
  }
};

export const getCourseDetail = async (courseId: string) => {
  try {
    const { data: course } = await axios.get<SingleCourseResponse>(`${API_URL}/courses/${courseId}`);

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      thumbnail: course.thumbnail,
      publishedAt: new Date(course.published_at),
      classes: course.video.map((classItem) => ({
        id: classItem.id,
        title: classItem.title,
        description: classItem.description,
        thumbnail: classItem.thumbnail,
        publishedAt: new Date(classItem.published_at),
      })),
      author: {
        id: course.channel_id,
        name: course.channel.channel_name,
        description: course.channel.description,
        customUrl: course.channel.custom_url,
        thumbnail: course.channel.thumbnail,
        country: course.channel.country,
        views: course.channel.views,
        subs: course.channel.subs,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error('Error at login');
  }
};

export const getAuthors = async () => {};

export const getUserCourses = async () => {};
