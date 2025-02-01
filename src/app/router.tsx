import App from '@app/App';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <></>
      }
    ]
  },
], {
  basename: "/MockEShop", // Укажите название вашего репозитория
});
