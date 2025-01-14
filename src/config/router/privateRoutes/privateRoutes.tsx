import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SuccessPage = lazy(() => import('@pages/auth/success/SuccessPage'));
const OrderSuccessPage = lazy(
  () => import('@pages/orders/OrderSuccessPage/OrderSuccessPage')
);
const OrderDetailsPage = lazy(
  () => import('@pages/orders/OrderDetailsPage/OrderDetailsPage')
);
const OrderPage = lazy(() => import('@pages/orders/OrderPage/OrderPage'));

export const privateAuthRoutes: RouteObject[] = [
  {
    path: 'success',
    element: <SuccessPage />,
  },
];

export const privateOrderRoutes: RouteObject[] = [
  {
    path: 'order',
    element: <OrderPage />,
  },
  {
    path: 'order/success/:orderId',
    element: <OrderSuccessPage />,
  },
  {
    path: 'order/details/:orderId',
    element: <OrderDetailsPage />,
  },
];
