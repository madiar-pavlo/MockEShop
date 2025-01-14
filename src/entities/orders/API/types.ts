import { Order, OrderItem } from '@services/Supabase/supabase.types';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export type OrderMutationNames =
  | 'insertOrder'
  | 'insertOrderItems';
export type OrderQueryNames = 'getOrderById' | 'getOrders' | 'getOrderItems';

export type InsertOrderBody = {
  insertOrder: Omit<Order, 'id' | 'created_at' | 'user_id' | 'status'>;
};
export type InsertOrderItemsBody = {
  insertOrderItems: Omit<OrderItem, 'id' | 'created_at' | 'user_id'>[];
};

export type InsertOrderResponse = PostgrestSingleResponse<Order>;
export type InsertOrderItemsResponse = PostgrestSingleResponse<null>;

export type GetOrderByIdBody = {
  orderId: Order['id'];
};
export type GetOrderItems = {
  getOrderItems: {
    orderId: Order['id'];
  };
};
export type GetOrdersResponse = PostgrestSingleResponse<Order[]>;
export type GetOrderByIdResponse = PostgrestSingleResponse<Order>;
export type GetOrderItemsResponse = PostgrestSingleResponse<OrderItem[]>;

export type OrderBodies =
  | InsertOrderBody
  | InsertOrderItemsBody
  | GetOrderByIdBody
  | GetOrderItems;

export type OrderResponses =
  | InsertOrderResponse
  | InsertOrderItemsResponse
  | GetOrdersResponse
  | GetOrderByIdResponse
  | GetOrderItemsResponse;
