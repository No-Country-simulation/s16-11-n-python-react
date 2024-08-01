export interface Course {
  id: string;
  channelId: string;
  name: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

export interface ICourseDetail {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: Date;
  classes: Class[];
  author: Author;
}

export interface Author {
  id: string;
  name: string;
  description: string;
  customUrl: string;
  thumbnail: string;
  country: string;
  views: number;
  subs: number;
}

export interface ClassData {
  class: Class;
  course: Class;
  classes: Class[];
}

export interface Class {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: Date;
}

export interface SmartAnswer {
  answer: string;
  courses: CourseAnswer[];
}

export interface CourseAnswer {
  courseId: string;
  courseName: string;
  thumbnail: string;
  channel: string;
  classes?: Class[];
}

export interface ClassAnswer {
  class_id: string;
  class_title: string;
}
