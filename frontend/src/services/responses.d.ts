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
