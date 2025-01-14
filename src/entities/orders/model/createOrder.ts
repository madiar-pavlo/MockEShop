import { AppThunk } from '@app/store';
import { InsertOrderBody, InsertOrderItemsBody } from '../API/types';
import {
  OrderItemsMutation,
  OrderMutation,
} from '../API/api';
import { OrderItem } from '@services/Supabase/supabase.types';
import { APIDeleteAllCartItems } from '@entities/cart/API/api';
import {
  APIChangeProductSize,
  APIChangeProductVariant,
} from '@entities/products/API/api';

interface CreateOrderArgs {
  order: InsertOrderBody;
  orderItems: Omit<OrderItem, 'order_id' | 'id' | 'created_at'>[];
  insertOrder: OrderMutation;
  insertOrderItems: OrderItemsMutation;
}

export const createOrder =
  ({
    order,
    orderItems,
    insertOrder,
    insertOrderItems,
  }: CreateOrderArgs): AppThunk =>
  async (dispatch, _, { router }) => {
    const { data: orderData } = await insertOrder(order);
    if (orderData) {
      console.log('DATA: ', orderData);
      const trasformatedOrderItems: Omit<
        OrderItem,
        'id' | 'created_at' | 'user_id'
      >[] = orderItems.map((item) => ({
        ...item,
        order_id: orderData.id,
      }));
      const insertOrderItemsBody: InsertOrderItemsBody = {
        insertOrderItems: trasformatedOrderItems,
      };
      const { error } = await insertOrderItems(insertOrderItemsBody);
      if (!error) {
        await dispatch(
          APIDeleteAllCartItems({
            deleteAllCartItemsId: orderItems[0].user_id,
          })
        );
        await Promise.all(
          orderItems.map(async (item) => {
            await dispatch(
              APIChangeProductSize({
                sizeToChange: {
                  quantity: item.quantity,
                  sizeId: item.product_size_id,
                },
              })
            );
            await dispatch(
              APIChangeProductVariant({
                variantToChange: {
                  quantity: item.quantity,
                  variantId: item.product_variant_id,
                },
              })
            );
          })
        );
        router.navigate(`/order/success/${orderData.id}`);
      }
    }
  };
