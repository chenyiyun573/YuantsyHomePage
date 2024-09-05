import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";

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
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
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
];

export default routes;
