import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Pricing from "../views/Pricing";
import Customers from "../views/Customers";

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
    ],
  },
];

export default routes;
