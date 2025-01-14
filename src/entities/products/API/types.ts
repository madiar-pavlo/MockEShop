import { SupabaseError } from '@services/RTKQuery/types';
import {
  Product,
  ProductSize,
  ProductVariant,
} from '@services/Supabase/supabase.types';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export type ProductsQueryMethodNames =
  | 'getProducts'
  | 'getProduct'
  | 'getProductsCount'
  | 'getAllProducts'
  | 'getProductSizes'
  | 'getProductVariants'
  | 'getProductVariantById'
  | 'getProductSizeById';

export type ProductsMutationMethondNames =
  | 'changeProductVariantQuantity'
  | 'changeProductSizeQuantity';

export type Products = Record<string, Product | undefined>;

export type ProductId = {
  id: Product['id'];
};

export type ProductGId = {
  gID: Product['gID'];
};
export type GetAllProductsArgs = {
  options: {
    category?: Product['category'];
    name?: Product['name'];
    price?: number[];
  };
};

type ProductSizes = {
  count: number | null;
  id: string;
  product_id: string | null;
  size: string | null;
};

export type ProductsData = {
  data: {
    products: Products;
    ids: number[] | [];
  };
  error: SupabaseError['error'] | null;
};

export type GetProductcCountResponse = {
  data: {
    count: number | null;
  };
  error: SupabaseError['error'] | null;
};

type GetProductsResponse = PostgrestSingleResponse<Product[]> | ProductsData;

type GetProductResponse = {
  data: Product | null;
  error: SupabaseError['error'] | null;
};

type GetProductVariantsResponse = {
  data: ProductVariant[] | null;
  error: SupabaseError['error'] | null;
};

type GetProductSizesResponse = {
  data: ProductSizes[] | null;
  error: SupabaseError['error'] | null;
};

type GetProductSizeByIdResponse = PostgrestSingleResponse<ProductSize>;

export type GetProductSizeByIdBody = {
  sizeId: ProductSize['id'];
};

type GetProductVariantByIdResponse = PostgrestSingleResponse<ProductVariant>;

export type GetProductsRangeBody = {
  page: number;
  productsCount: number;
};

export type GetProductVariantByIdBody = {
  variantId: ProductVariant['id'];
};
type GetProductVariantsByGIdBody = ProductGId;

type GetProductByIdBody = ProductId;

export type ChangeProductSizeQuantityBody = {
  sizeToChange: {
    sizeId: ProductSize['id'];
    quantity: ProductSize['count'];
  };
};
export type ChangeProductVariantQuantityBody = {
  variantToChange: {
    variantId: ProductVariant['id'];
    quantity: ProductVariant['count'];
  };
};

export type ChangeProductVariantQuantityResponse = PostgrestSingleResponse<null>

export type ChangeProductSizeQuantityResponse = PostgrestSingleResponse<null>


export type ProductAPIBodies =
  | GetProductsRangeBody
  | GetProductVariantsByGIdBody
  | GetProductByIdBody
  | GetProductVariantByIdBody
  | GetProductSizeByIdBody
  | ChangeProductVariantQuantityBody
  | ChangeProductSizeQuantityBody;

export type ProductAPIResponses =
  | GetProductsResponse
  | GetProductResponse
  | GetProductcCountResponse
  | GetProductSizesResponse
  | GetProductVariantsResponse
  | GetProductVariantByIdResponse
  | GetProductSizeByIdResponse
  | ChangeProductVariantQuantityResponse
  | ChangeProductSizeQuantityResponse;
