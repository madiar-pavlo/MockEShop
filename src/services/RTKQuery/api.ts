import { createApi } from "@reduxjs/toolkit/query/react";
import { supabaseBaseQuery } from "./supabaseBaseQuery";

export const baseApi = createApi({
  baseQuery: supabaseBaseQuery,
  endpoints: () => ({}),
  tagTypes: ['Auth', 'Cart']
});
