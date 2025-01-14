// import ForDevRequirements from '../../../../DEV/ForDevRequirements';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const LoginPage = lazy(() => import('@pages/auth/login/LoginPage'));
const HomePage = lazy(() => import('@pages/main/home/HomePage'));
const RegisterPage = lazy(() => import('@pages/auth/register/RegisterPage'));
const NotFoundPage = lazy(() => import('@pages/main/notFound/NotFoundPage'));

export const mainRoutes: RouteObject[] = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  // {
  //   path: 'fetchData',
  //   element: <ForDevRequirements />,
  // },
];

export const publicAuthRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
];
