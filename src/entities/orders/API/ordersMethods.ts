import { RTKMethods } from '@services/RTKQuery/types';
import { OrderMutationNames, OrderQueryNames } from './types';
import { isBody } from '@utils/isBody';
import { supabase } from '@services/Supabase/supabaseClient';
import { bodyIncompatibleError } from '@utils/bodyIncompatibleError';

const ordersMutations: RTKMethods<OrderMutationNames> = {
  insertOrder: async (maybeBody) => {
    const body = isBody(maybeBody);
    if ('insertOrder' in body) {
      return await supabase
        .from('orders')
        .insert(body.insertOrder)
        .select()
        .single();
    }

    throw new Error(bodyIncompatibleError('orders'));
  },
  insertOrderItems: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('insertOrderItems' in body) {
      return await supabase.from('order_items').insert(body.insertOrderItems);
    }

    throw new Error(bodyIncompatibleError(`order's items`));
  },
};

const ordersQueries: RTKMethods<OrderQueryNames> = {
  getOrderById: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('orderId' in body) {
      return await supabase
        .from('orders')
        .select('*')
        .eq('id', body.orderId)
        .single();
    }
    throw new Error(bodyIncompatibleError(`order`));
  },
  getOrders: async () => {
    const response = await supabase.from('orders').select('*');
    return response;
  },
  getOrderItems: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('getOrderItems' in body) {
      const orderId = body.getOrderItems.orderId;
      return await supabase
        .from('order_items')
        .select('*')
        .eq('order_id', orderId);
    }

    throw new Error(bodyIncompatibleError(`order's items`));
  },
};

export const ordersMethods = {
  ...ordersMutations,
  ...ordersQueries,
};
