import { RTKMethods } from '@services/RTKQuery/types';
import { supabase } from '@services/Supabase/supabaseClient';
import { AuthMutationMethodNames, AuthQueriesMethodNames } from './types';


export const authMutations: RTKMethods<AuthMutationMethodNames> = {
  login: async (body) => {
    if (!body) {
      throw new Error('body is required');
    }
    if ('password' in body) {
      return await supabase.auth.signInWithPassword(body);
    }
    throw new Error('body is not user credentials');
  },
  register: async (body) => {
    if (!body) {
      throw new Error('body is required');
    }
    if ('password' in body) {
      return await supabase.auth.signUp(body);
    }
    throw new Error('body is not user credentials');
  },
  logout: async () => {
    const data = await supabase.auth.signOut();
    return {
      data: {
        data: null,
      },
      error: data.error,
    };
  },
  googleLogin: async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  },
};


export const authQueries: RTKMethods<AuthQueriesMethodNames> = {
  getSession: async () => {
    return await supabase.auth.getSession();
  },
};
