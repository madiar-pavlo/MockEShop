import { SessionResponse } from '@services/Supabase/supabase.types';
import {
  AuthError,
  AuthResponse,
  AuthTokenResponsePassword,
  OAuthResponse,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';

export type AuthSignOutResponse = {
  data: {
    data: null;
  };
  error: AuthError | null;
};

export type AuthMutationMethodNames =
  | 'login'
  | 'googleLogin'
  | 'register'
  | 'logout';

export type AuthQueriesMethodNames = 'getSession';

export type GetSessionResponse = SessionResponse['data'] & {
  isAuth: boolean
}

export type AuthAPIBodies =
  | SignInWithPasswordCredentials
  | SignUpWithPasswordCredentials;

export type AuthAPIResponses =
  | AuthTokenResponsePassword
  | AuthResponse
  | AuthSignOutResponse
  | SessionResponse
  | OAuthResponse;
