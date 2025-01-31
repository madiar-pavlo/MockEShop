import { AppThunk } from '@app/store';
import { RegisterUserMutation } from '../API/api';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';

export const registerUser =
  (
    registerUser: RegisterUserMutation,
    infoToAuthIn: SignUpWithPasswordCredentials
  ): AppThunk =>
  async (_, __, { router }) => {
    if ('email' in infoToAuthIn) {
      const { error } = await registerUser(infoToAuthIn);

      if (!error) {
        router.navigate(`/auth/email-confirm/${infoToAuthIn.email}`);
      }
    }
  };
