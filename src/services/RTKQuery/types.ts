import { AuthError, PostgrestError } from '@supabase/supabase-js';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import {
  AuthAPIBodies,
  AuthAPIResponses,
  AuthMutationMethodNames,
  AuthQueriesMethodNames,
} from '@entities/auth/API/types';
import {
  ProductAPIBodies,
  ProductAPIResponses,
  ProductsMutationMethondNames,
  ProductsQueryMethodNames,
} from '@entities/products/API/types';
import {
  CartBodies,
  CartMutationNames,
  CartQueryNames,
  CartAPIResponses,
} from '@entities/cart/API/types';
import {
  OrderBodies,
  OrderMutationNames,
  OrderQueryNames,
  OrderResponses,
} from '@entities/orders/API/types';
import { UserMethodNames, UserResponses } from '@entities/user/API/types';

export type SupabaseMethodNames =
  | AuthMutationMethodNames
  | AuthQueriesMethodNames
  | ProductsQueryMethodNames
  | ProductsMutationMethondNames
  | CartMutationNames
  | CartQueryNames
  | OrderMutationNames
  | OrderQueryNames
  | UserMethodNames;
export type SupabaseBody =
  | AuthAPIBodies
  | ProductAPIBodies
  | CartBodies
  | OrderBodies;

export type SupabaseQueryArgs = {
  method: SupabaseMethodNames;
  body?: SupabaseBody;
  params?: Record<string, any>;
};

export type SupabaseError = {
  error: Error | PostgrestError | AuthError;
};

export type MethodHandler = (
  body?: SupabaseBody,
  params?: any
) => Promise<SupabaseQueryResponse>;

export type RTKMethods<MutationNames extends string> = Record<
  MutationNames,
  MethodHandler
>;

export type SupabaseQueryResponse =
  | AuthAPIResponses
  | ProductAPIResponses
  | CartAPIResponses
  | OrderResponses
  | UserResponses;

type Data = SupabaseQueryResponse['data'];

export type SupabaseBaseQuery = BaseQueryFn<
  SupabaseQueryArgs,
  Data,
  SupabaseError
>;
