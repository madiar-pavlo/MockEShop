import { Product } from "@services/Supabase/supabase.types";

export const transformGId = (gID: Product['gID']) => gID.split('/')[4]