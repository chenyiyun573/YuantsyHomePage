import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Download from "../views/Download";
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
        element: <Home />,
      },
      {
        path: "download",
        element: <Download />,
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
    path: "/investment",
    element: () => {
      window.location.href = "/investment/index.html";
      return null;
    },
  },
  {
    path: "/career",
    element: () => {
      window.location.href = "/career/index.html";
      return null;
    },
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
