import { About, CourseDetail, ErrorPage, Home, ClassPage, CoursesInProgress, FinishCourses, NewCourses } from '../pages';

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
    path: '/courses/courses-in-progress',
    component: CoursesInProgress,
  },
  {
    path: '/courses/finish-courses',
    component: FinishCourses,
  },
  {
    path: '/courses/new-courses',
    component: NewCourses,
  },
  {
    errorPage: true,
    component: ErrorPage,
  },
];
