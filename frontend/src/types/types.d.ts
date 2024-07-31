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
  class:   Class;
  course:  Class;
  classes: Class[];
}

export interface Class {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: Date;
}
