import { About, CourseDetail, ErrorPage, Home, ClassPage } from "../pages";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/course/:id",
    component: CourseDetail,
  },
  {
    path: "/class/:id",
    component: ClassPage,
  },
  {
    errorPage: true,
    component: ErrorPage,
  },
];
