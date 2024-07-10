import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

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