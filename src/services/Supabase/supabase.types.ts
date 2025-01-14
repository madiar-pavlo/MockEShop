
import { Database } from './database.types';
import { supabase } from './supabaseClient';

type DatabasePublic = Database['public'];
type DatabaseTables = DatabasePublic['Tables'];

export type ProductVariant = DatabaseTables['product_variants']['Row'];
export type ProductSize = DatabaseTables['product_sizes']['Row'];
export type Product = DatabaseTables['products']['Row'];

export type InsertCartItem = DatabaseTables['cart_items']['Insert'];
export type CartItem = DatabaseTables['cart_items']['Row'];

export type Order = DatabaseTables['orders']['Row'];
export type OrderItem = DatabaseTables['order_items']['Row'];

export type SessionResponse = Awaited<
  ReturnType<typeof supabase.auth.getSession>
>;
