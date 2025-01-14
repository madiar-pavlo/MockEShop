import { Product } from "@services/Supabase/supabase.types";
import { Products, ProductsData } from "../types";

export const transformGetProductResponse = (
  response: Product[]
): ProductsData['data'] => {
  const products: Products = response?.reduce<Products>((acc, currentItem) => {
    acc[currentItem.id] = currentItem;
    return acc;
  }, {});
  const ids = Array.from(response.keys());
  return {
    products: products,
    ids,
  };
};
