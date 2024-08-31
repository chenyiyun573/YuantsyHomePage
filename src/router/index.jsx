import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Pricing from "../views/Pricing";
import Customers from "../views/Customers";
import Blog from "../views/Blog";
import BlogPost from "../views/BlogPost";
import Documentation from "../views/Documentation";
import Support from "../views/Support";
import Apps from "../views/Apps";
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
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog-post",
        element: <BlogPost />,
      },
      {
        path: "documentation",
        element: <Documentation />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "apps",
        element: <Apps />,
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
