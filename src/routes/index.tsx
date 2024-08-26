import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("/@/pages/home"));
const About = lazy(() => import("/@/pages/about"));

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
