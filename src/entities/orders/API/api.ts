import { baseApi } from '@services/RTKQuery/api';
import {
  GetOrderByIdBody,
  GetOrderByIdResponse,
  GetOrderItems,
  GetOrderItemsResponse,
  GetOrdersResponse,
  InsertOrderBody,
  InsertOrderItemsBody,
  InsertOrderItemsResponse,
  InsertOrderResponse,
} from './types';

const ordersApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    insertOrder: create.mutation<InsertOrderResponse['data'], InsertOrderBody>({
      query: (body) => ({
        method: 'insertOrder',
        body,
      }),
    }),
    insertOrderItems: create.mutation<
      InsertOrderItemsResponse['data'],
      InsertOrderItemsBody
    >({
      query: (body) => ({
        method: 'insertOrderItems',
        body,
      }),
    }),
    getOrderById: create.query<GetOrderByIdResponse['data'], GetOrderByIdBody>({
      query: (body) => ({
        method: 'getOrderById',
        body,
      }),
    }),
    getOrders: create.query<GetOrdersResponse['data'], void>({
      query: () => ({
        method: 'getOrders',
      }),
    }),
    getOrderItems: create.query<GetOrderItemsResponse['data'], GetOrderItems>({
      query: (body) => ({
        method: 'getOrderItems',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

/// USE QUERIES
export const {
  useLazyGetOrderByIdQuery,
  useLazyGetOrderItemsQuery,
  useGetOrdersQuery,
} = ordersApi;

/// USE MUTATIONS
export const { useInsertOrderMutation, useInsertOrderItemsMutation } =
  ordersApi;

// some types:))
export type OrderMutation = ReturnType<typeof useInsertOrderMutation>[0];

export type OrderItemsMutation = ReturnType<
  typeof useInsertOrderItemsMutation
>[0];

/// MUTATIONS INITIATORS
export const {
  insertOrder: { initiate: APIInsertOrder },
  insertOrderItems: { initiate: APIInsertOrderItems },
} = ordersApi.endpoints;
