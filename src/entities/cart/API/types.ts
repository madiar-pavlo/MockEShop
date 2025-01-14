import {
  CartItem,
  InsertCartItem,
} from '@services/Supabase/supabase.types';
import { PostgrestSingleResponse, User } from '@supabase/supabase-js';

export type CartMutationNames =
  | 'insertCartItem'
  | 'deleteCartItem'
  | 'deleteAllCartItems';
export type CartQueryNames = 'getCartItems';

export type InsertCartItemBody = {
  insertCartItem: InsertCartItem;
};

export type DeleteCartItemBody = {
  deleteCartItemId: CartItem['id'];
};
export type DeleteAllCartItemsBody = {
  deleteAllCartItemsId: User['id'];
};

export type GetCartItemsResponse = PostgrestSingleResponse<CartItem[]>;

export type InsertCartItemResponse = PostgrestSingleResponse<null>;
export type DeleteCartItemResponse = PostgrestSingleResponse<null>;
export type DeleteAllCartItemsResponse = PostgrestSingleResponse<null>;

export type GetCartItemsData = GetCartItemsResponse['data'];

export type CartBodies =
  | InsertCartItemBody
  | DeleteCartItemBody
  | DeleteAllCartItemsBody;

export type CartAPIResponses =
  | GetCartItemsResponse
  | InsertCartItemResponse
  | DeleteCartItemResponse
  | DeleteAllCartItemsResponse;
