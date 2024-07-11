import { About, ErrorPage, Home } from "../pages";

export const routes = [
  {
    path:'/',
    component: Home,
  },
  {
    path:'/about',
    component: About,
  },
  {
    errorPage: true,
    component: ErrorPage
  }
]