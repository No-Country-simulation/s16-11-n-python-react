interface LoginResponse {
  access_token: string;
  token_type: string;
}

interface RegisterResponse {
  first_name: string;
  last_name: string;
  email: string;
  id: number;
}

export interface CourseResponse {
  id:           string;
  channel_id:   string;
  title:        string;
  description:  null | string;
  thumbnail: string;
  published_at: string;
}

export interface SingleCourseResponse {
  channel_id:   string;
  title:        string;
  thumbnail:    string;
  description:  string;
  published_at: string;
  id:           string;
  channel:      Channel;
  video:        Video[];
}

export interface Channel {
  channel_name: string;
  description:  string;
  custom_url:   string;
  thumbnail:    string;
  country:      string;
  views:        number;
  subs:         number;
}

export interface Video {
  id:           string;
  title:        string;
  thumbnail:    string;
  description:  string;
  published_at: string;
}

export interface ClassResponse {
  video:  Course;
  course: Course;
}

export interface Course {
  id:           string;
  title:        string;
  thumbnail:    string;
  description:  string;
  published_at: Date;
  video:       Video[];
}

export interface Video {
  id:           string;
  title:        string;
  thumbnail:    string;
  description:  string;
  published_at: Date;
}