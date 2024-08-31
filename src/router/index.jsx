import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../views/Home/index.jsx';


const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />,
      },
      {
        path: 'home',
        element: <Home />,
      }
    ]
  }
];

export default routes;