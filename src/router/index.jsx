import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";

import Download from "../views/Download"
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import ResetPassword from "../views/ResetPassword";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />, // Set the Home component for the root path
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/download",
    element: <Layout />,
    children: [
      {
        path: "/download",
        element: <Download />, // Set the Home component for the root path
      },
    ],
  },
];

export default routes;
