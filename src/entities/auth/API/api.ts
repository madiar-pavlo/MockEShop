import { baseApi } from '@services/RTKQuery/api';
import { SessionResponse } from '@services/Supabase/supabase.types';
import {
  AuthError,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { GetSessionResponse } from './types';

const authApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    login: create.mutation({
      query: (loginCredentials: SignInWithPasswordCredentials) => ({
        method: 'login',
        body: loginCredentials,
      }),
      transformErrorResponse(returnError) {
        console.log('SIGN UP returnError: ', returnError);
        if ('code' in returnError.error) {
          if (returnError.error.code) {
            return returnError.error.code as string;
          }
        }
      },
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

      transformErrorResponse: (returnError) => {
        console.log('SIGN UP returnError: ', returnError);
        if ('code' in returnError.error) {
          if (returnError.error.code) {
            return returnError.error.code as string;
          }
        }
      },
    }),
    logout: create.mutation({
      query: () => ({
        method: 'logout',
      }),
      invalidatesTags: [{ type: 'Auth' }],
    }),
    getSession: create.query<GetSessionResponse, void>({
      query: () => ({
        method: 'getSession',
      }),
      transformResponse: (response) => {
        if (response) {
          if ('session' in response) {
            const { session } = response;
            return {
              session,
              isAuth: Boolean(session),
            };
          }
          throw new Error('Response doesnt have session')
        }
        throw new Error('Response doesnt exist')
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
  register: { initiate: APIRegisterUser },
  googleLogin: { initiate: APIGoogleLogin },
} = authApi.endpoints;

export type RegisterUserMutation = ReturnType<typeof useRegisterMutation>[0];

export type LoginUserMutation = ReturnType<typeof useLoginMutation>[0];
