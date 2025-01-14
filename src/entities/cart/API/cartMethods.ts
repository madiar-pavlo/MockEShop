import { RTKMethods } from '@services/RTKQuery/types';
import { CartMutationNames, CartQueryNames } from './types';
import { isBody } from '@utils/isBody';
import { supabase } from '@services/Supabase/supabaseClient';
import { bodyIncompatibleError } from '@utils/bodyIncompatibleError';

export const cartMutations: RTKMethods<CartMutationNames> = {
  insertCartItem: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('insertCartItem' in body) {
      const cartItem = body.insertCartItem;

      return await supabase.from('cart_items').insert(cartItem);
    }

    throw new Error(bodyIncompatibleError('cart_items'));
  },
  deleteCartItem: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('deleteCartItemId' in body) {
      return await supabase
        .from('cart_items')
        .delete()
        .eq('id', body.deleteCartItemId);
    }
    throw new Error(bodyIncompatibleError('deleteCartItemId'));
  },
  deleteAllCartItems: async (maybeBody) => {
    const body = isBody(maybeBody);
    if ('deleteAllCartItemsId' in body) {
      return await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', body.deleteAllCartItemsId);
    }

    throw new Error(bodyIncompatibleError('deleteAllCartItemsId'));
  },
};

export const cartQueries: RTKMethods<CartQueryNames> = {
  getCartItems: async () => {
    const response = await supabase.from('cart_items').select('*');
    return response;
  },
};
