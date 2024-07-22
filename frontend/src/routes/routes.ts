import { About, CourseDetail, ErrorPage, Home, ClassPage, Courses } from '../pages';

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
    path: '/class/:id',
    component: ClassPage,
  },
  {
    path: '/courses',
    component: Courses,
  },
  {
    errorPage: true,
    component: ErrorPage,
  },
];
