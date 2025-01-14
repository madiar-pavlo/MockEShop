// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router';
import { APIGetSession } from '@entities/auth/API/api';

store.dispatch(APIGetSession({}));

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  /* </StrictMode> */
);
