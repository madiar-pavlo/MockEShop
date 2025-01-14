import { baseApi } from '@services/RTKQuery/api';
import { transformGetProductResponse } from './utils/transformGetProductResponse';
import {
  Product,
  ProductSize,
  ProductVariant,
} from '@services/Supabase/supabase.types';
import {
  ChangeProductSizeQuantityBody,
  ChangeProductSizeQuantityResponse,
  ChangeProductVariantQuantityBody,
  ChangeProductVariantQuantityResponse,
  GetAllProductsArgs,
  GetProductcCountResponse,
  GetProductSizeByIdBody,
  GetProductsRangeBody,
  GetProductVariantByIdBody,
  ProductGId,
  ProductId,
  Products,
  ProductsData,
} from './types';

const productApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getProductsList: create.query<ProductsData['data'], GetProductsRangeBody>({
      query: ({ page = 1, productsCount = 9 }) => ({
        method: 'getProducts',
        body: {
          page,
          productsCount,
        },
      }),
      transformResponse(response) {
        if (Array.isArray(response)) {
          return transformGetProductResponse(response as Product[]);
        }
        return {
          products: {},
          ids: [],
        };
      },
      serializeQueryArgs: () => `getProductsList`,
      merge(currentCacheData, responseData) {
        const keys = Object.keys(responseData.products);
        const newData: Products = keys.reduce<Products>((acc, key) => {
          acc[key] = responseData.products[key];
          return acc;
        }, {});
        currentCacheData.products = {
          ...currentCacheData.products,
          ...newData,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
    getAllProducts: create.query<(Product | undefined)[], GetAllProductsArgs>({
      query: () => ({
        method: 'getAllProducts',
      }),
      transformResponse(response, _, arg) {
        if (Array.isArray(response)) {
          if ('name' in response[0]) {
            const {
              options: { category, name, price },
            } = arg;
            console.log('Category: ', category);
            console.log('Name: ', name);
            console.log('Price: ', price);
            const filters: ((item: Product) => boolean)[] = [];
            if (category) {
              console.log('Category Exist: ', category);
              filters.push((item) => item.category === category);
            }
            if (price) {
              console.log('Price Exist: ', price);
              filters.push(
                (item) => item.price > price[0] && item.price < price[1]
              );
            }
            if (name) {
              console.log('Name Exist: ', name);
              filters.push((item) =>
                item.name.toUpperCase().includes(name?.toUpperCase() ?? '')
              );
            }
            const filteredProducts = response.filter((item) =>
              filters.every((filter) => filter(item as Product))
            );
            return filteredProducts as Product[];
          }
        }

        return [];
      },
      serializeQueryArgs: () => `getAllProducts`,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.options !== previousArg?.options;
      },
    }),
    // getAllProducts: create.query<(Product | undefined)[], void>({
    //   query: () => ({
    //     method: 'getAllProducts'
    //   })
    // }),
    getProductsCount: create.query<GetProductcCountResponse['data'], void>({
      query: () => ({
        method: 'getProductsCount',
      }),
    }),
    getProductById: create.query<Product, ProductId>({
      query: ({ id }) => ({
        method: 'getProduct',
        body: { id },
      }),
    }),
    getProductSizeById: create.query<ProductSize, GetProductSizeByIdBody>({
      query: (body) => ({
        method: 'getProductSizeById',
        body,
      }),
    }),
    getProductVariantById: create.query<
      ProductVariant,
      GetProductVariantByIdBody
    >({
      query: (body) => ({
        method: 'getProductVariantById',
        body,
      }),
    }),
    getProductSizes: create.query<ProductSize[], ProductId>({
      query: ({ id }) => ({
        method: 'getProductSizes',
        body: { id },
      }),
    }),
    getProductVariants: create.query<ProductVariant[], ProductGId>({
      query: ({ gID }) => ({
        method: 'getProductVariants',
        body: {
          gID,
        },
      }),
    }),
    changeProductVariant: create.query<
      ChangeProductVariantQuantityResponse,
      ChangeProductVariantQuantityBody
    >({
      query: (body) => ({
        method: 'changeProductVariantQuantity',
        body,
      }),
    }),
    changeProductSize: create.query<
      ChangeProductSizeQuantityResponse,
      ChangeProductSizeQuantityBody
    >({
      query: (body) => ({
        method: 'changeProductSizeQuantity',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetProductsListQuery,
  useGetProductByIdQuery,
  useGetProductsCountQuery,
  useGetAllProductsQuery,
  useGetProductSizesQuery,
  useGetProductVariantsQuery,
  useGetProductSizeByIdQuery,
  useGetProductVariantByIdQuery,
  useLazyGetProductByIdQuery,
  useLazyGetProductSizesQuery,
  useLazyGetProductVariantsQuery,
} = productApi;


export const {
  changeProductSize: { initiate: APIChangeProductSize},
  changeProductVariant: {initiate: APIChangeProductVariant}
} = productApi.endpoints