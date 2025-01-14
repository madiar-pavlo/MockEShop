import { configureStore, ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { baseApi } from '@services/RTKQuery/api';
import { extraArgument } from './extraArgument';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(baseApi.middleware),
});
export default store;

export type AppThunk<R = void> = ThunkAction<
  R,
  AppSpate,
  typeof extraArgument,
  UnknownAction
>;

type AppSpate = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
