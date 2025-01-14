import Loader from '@UI/MainUI/Loader/Loader';
import { Suspense } from 'react';
import { Route, RouteObject } from 'react-router-dom';

const renderRoutes = ({ routes }: { routes: RouteObject[] }) => {
  return routes.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={<Suspense fallback={<Loader />}>{item.element}</Suspense>}
    />
  ));
};
export default renderRoutes;
