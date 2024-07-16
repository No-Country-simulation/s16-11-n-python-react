import { About, CourseDetail, ErrorPage, Home } from '../pages';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/course/:id',
    component: CourseDetail,
  },
  {
    errorPage: true,
    component: ErrorPage,
  },
];
