import { baseApi } from '@services/RTKQuery/api';
import { GetUserResponse } from './types';

const userApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getUser: create.query<GetUserResponse['data'], void>({
      query: () => ({
        method: 'getUser',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserQuery } = userApi;
