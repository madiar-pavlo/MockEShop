import { AppThunk } from '@app/store';
import { APIGoogleLogin, LoginUserMutation } from '../API/api';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';


export const loginUser =
  (
    loginUser: LoginUserMutation,
    infoToAuthIn: SignInWithPasswordCredentials
  ): AppThunk =>
  async (_, __, { router }) => {
    if('email' in infoToAuthIn){
      const { error } = await loginUser(infoToAuthIn);

      if (!error) {
        router.navigate(`/auth/success`);
      }
    }
  };

export const googleLogin = (): AppThunk => async (dispatch, _) => {
  await dispatch(APIGoogleLogin({}));
};
