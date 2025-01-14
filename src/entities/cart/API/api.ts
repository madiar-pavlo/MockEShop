import { baseApi } from '@services/RTKQuery/api';
import {
  DeleteAllCartItemsBody,
  DeleteAllCartItemsResponse,
  DeleteCartItemBody,
  DeleteCartItemResponse,
  GetCartItemsData,
  InsertCartItemBody,
  InsertCartItemResponse,
} from './types';

const cartApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getCartItems: create.query<GetCartItemsData, void>({
      query: () => ({
        method: 'getCartItems',
      }),
      providesTags: ['Cart'],
    }),
    insertCartItem: create.mutation<InsertCartItemResponse, InsertCartItemBody>(
      {
        query: (body) => ({
          method: 'insertCartItem',
          body,
        }),
        invalidatesTags: ['Cart'],
      }
    ),
    deleteCartItem: create.mutation<DeleteCartItemResponse, DeleteCartItemBody>(
      {
        query: (body) => ({
          method: 'deleteCartItem',
          body,
        }),
        invalidatesTags: ['Cart'],
      }
    ),
    deleteAllCartItems: create.mutation<
      DeleteAllCartItemsResponse,
      DeleteAllCartItemsBody
    >({
      query: (body) => ({
        method: 'deleteAllCartItems',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
  overrideExisting: true,
});
/// QUERIES
export const { useGetCartItemsQuery } = cartApi;

/// MUTATIONS
export const { useDeleteCartItemMutation } = cartApi;

export const {
  insertCartItem: { initiate: APIInsertCartItem },
  deleteAllCartItems: { initiate: APIDeleteAllCartItems },
} = cartApi.endpoints;
