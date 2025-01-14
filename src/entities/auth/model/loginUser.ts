import { AppThunk } from '@app/store';
import { APIGoogleLogin, APILoginUser } from '../API/api';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

export const loginUser =
  (infoToAuthIn: SignInWithPasswordCredentials): AppThunk =>
  async (dispatch, _, { router }) => {
    await dispatch(APILoginUser(infoToAuthIn)).unwrap();

    router.navigate('/auth/success');
  };
export const googleLogin =
  (): AppThunk =>
  async (dispatch, _,) => {
    await dispatch(APIGoogleLogin({}));
  };
