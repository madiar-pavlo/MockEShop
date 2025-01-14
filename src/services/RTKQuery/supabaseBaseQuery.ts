import { authMutations, authQueries } from '@entities/auth/API/authMethods';
import {
  RTKMethods,
  SupabaseBaseQuery,
  SupabaseError,
  SupabaseMethodNames,
} from './types';
import {
  productMutations,
  productQueries,
} from '@entities/products/API/productMethods';
import { cartMutations, cartQueries } from '@entities/cart/API/cartMethods';
import { ordersMethods } from '@entities/orders/API/ordersMethods';
import userMethods from '@entities/user/API/userMethods';

const methodMap: RTKMethods<SupabaseMethodNames> = {
  ...authMutations,
  ...authQueries,
  ...productQueries,
  ...productMutations,
  ...cartMutations,
  ...cartQueries,
  ...ordersMethods,
  ...userMethods,
};

export const supabaseBaseQuery: SupabaseBaseQuery = async ({
  method,
  body,
  params,
}) => {
  try {
    const handler = methodMap[method];
    if (!handler) {
      throw new Error('Unsupported method');
    }
    const response = await handler(body, params);

    if (response.error) {
      throw {
        error: response.error,
      };
    }

    return { data: response.data };
  } catch (error) {
    return { error: error as SupabaseError };
  }
};
