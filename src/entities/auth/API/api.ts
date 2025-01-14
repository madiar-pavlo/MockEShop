import { baseApi } from '@services/RTKQuery/api';
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';

const authApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    login: create.mutation({
      query: (loginCredentials: SignInWithPasswordCredentials) => ({
        method: 'login',
        body: loginCredentials,
      }),
      invalidatesTags: [{ type: 'Auth' }],
    }),
    googleLogin: create.mutation({
      query: () => ({
        method: 'googleLogin',
      }),
      invalidatesTags: ['Auth'],
    }),
    register: create.mutation({
      query: (signUpCredentials: SignUpWithPasswordCredentials) => ({
        method: 'register',
        body: signUpCredentials,
      }),
    }),
    logout: create.mutation({
      query: () => ({
        method: 'logout',
      }),
      invalidatesTags: [{ type: 'Auth' }],
    }),
    getSession: create.query({
      query: () => ({
        method: 'getSession',
      }),
      transformResponse: (response) => {
        if (response) {
          if ('session' in response) {
            const { session } = response;
            return {
              data: {
                session,
                isAuth: Boolean(session),
              },
            };
          }
        }
      },
      providesTags: [{ type: 'Auth' }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetSessionQuery,
} = authApi;
export const {
  getSession: { initiate: APIGetSession },
  login: { initiate: APILoginUser, select: APIGetLoginState },
  googleLogin: { initiate: APIGoogleLogin },
} = authApi.endpoints;
