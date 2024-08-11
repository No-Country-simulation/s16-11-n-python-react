import CoursesLayout from '@/components/CoursesLayout';
import {
  About,
  CourseDetail,
  ErrorPage,
  Home,
  ClassPage,
  CoursesInProgress,
  FinishedCourses,
  NewCourses,
} from '../pages';
import AllCourses from '@/pages/AllCourses';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/sobre-nosotros',
    component: About,
  },
  {
    path: '/curso/:id',
    component: CourseDetail,
  },
  {
    path: '/clase/:id',
    component: ClassPage,
  },
  {
    path: '/todos-los-cursos',
    component: AllCourses
  },
  {
    path: '/cursos',
    component: CoursesLayout,
    children: [
      {
        path: '/cursos-en-progreso',
        component: CoursesInProgress,
      },
      {
        path: '/cursos-finalizados',
        component: FinishedCourses,
      },
      {
        path: '/nuevos-cursos',
        component: NewCourses,
      },
    ],
  },
  {
    errorPage: true,
    component: ErrorPage,
  },
];
