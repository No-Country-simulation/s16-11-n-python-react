import { API_URL } from '@/utils/config';
import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
  try {
    const formData = new FormData();

    formData.append('username', email);
    formData.append('password', password);

    const { data } = await axios.post<LoginResponse>(`${API_URL}/login/`, formData, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error at login');
  }
};

export const registerUser = async (body: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axios.post<RegisterResponse>(`${API_URL}/user/`, body);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error at registering');
  }
};
