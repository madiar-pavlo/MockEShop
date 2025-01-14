import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetSessionQuery } from '@entities/auth/API/api';
import {
  privateAuthRoutes,
  privateOrderRoutes,
} from '@config/router/privateRoutes/privateRoutes';
import {
  mainRoutes,
  publicAuthRoutes,
} from '@config/router/publicRoutes/publicRoutes';
import renderRoutes from '@utils/renderRoutes';
import Loader from '@UI/MainUI/Loader/Loader';
import { useGetCartItemsQuery } from '@entities/cart/API/api';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';
const NotFoundPage = lazy(() => import('@pages/main/notFound/NotFoundPage'));
const AuthLayout = lazy(() => import('@layout/AuthLayout'));
const GoBack = lazy(() => import('@UI/MainUI/GoBack/GoBack'));
const CatalogPage = lazy(() => import('@pages/products/catalog/CatalogPage'));
const ProductPage = lazy(() => import('@pages/products/product/ProductPage'));
const ProfilePage = lazy(
  () => import('@pages/profile/ProfilePage/ProfilePage')
);

const globalRoutes = () => {
  return (
    <>
      {renderRoutes({ routes: mainRoutes })}
      <Route
        path='catalog'
        element={
          <Suspense fallback={<Loader />}>
            <PageWrapper>
              <CatalogPage />
            </PageWrapper>
          </Suspense>
        }
      />
      <Route
        path='catalog/product/:productId/:productGId'
        element={
          <Suspense fallback={<Loader />}>
            <PageWrapper>
              <ProductPage />
            </PageWrapper>
          </Suspense>
        }
      />
    </>
  );
};

const privateRoutes = () => {
  return (
    <>
      {renderRoutes({ routes: privateOrderRoutes })}
      {renderRoutes({
        routes: [
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      })}
      <Route path='auth'>
        {renderRoutes({ routes: privateAuthRoutes })}
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <GoBack />
            </Suspense>
          }
        />
      </Route>
    </>
  );
};

const RoutesGenerator = () => {
  const { data, isLoading, error } = useGetSessionQuery({});
  const { data: cartItems, error: cartItemsError } = useGetCartItemsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (error || cartItemsError) {
    console.log(error);
    return <NotFoundPage />;
  }
  if (data && cartItems) {
    const {
      data: { isAuth },
    } = data;
    return (
      <Routes>
        {isAuth ? (
          <>
            {globalRoutes()}
            {privateRoutes()}
          </>
        ) : (
          <>
            {globalRoutes()}
            <Route
              path='auth'
              element={
                <Suspense fallback={<Loader />}>
                  <AuthLayout />
                </Suspense>
              }
            >
              {renderRoutes({ routes: publicAuthRoutes })}
            </Route>
          </>
        )}
      </Routes>
    );
  }
};

export default RoutesGenerator;
