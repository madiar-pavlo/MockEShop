import { RTKMethods } from '@services/RTKQuery/types';
import { supabase } from '@services/Supabase/supabaseClient';
import {
  ProductsMutationMethondNames,
  ProductsQueryMethodNames,
} from './types';
import { isBody } from '@utils/isBody';
import { bodyIncompatibleError } from '@utils/bodyIncompatibleError';

export const productQueries: RTKMethods<ProductsQueryMethodNames> = {
  getAllProducts: async () => {
    const response = await supabase.from('products').select('*');
    return response;
  },
  getProductsCount: async () => {
    const response = await supabase.from('products').select('*', {
      count: 'exact',
      head: true,
    });

    return {
      data: {
        count: response.count,
      },
      error: response.error,
    };
  },
  getProducts: async (maybeBody) => {
    const body = isBody(maybeBody);
    if ('page' in body) {
      const { page, productsCount } = body;

      const offset = (page - 1) * productsCount;
      const response = await supabase
        .from('products')
        .select('*')
        .range(offset, offset + (productsCount - 1));
      return response;
    }
    const response = await supabase.from('products').select('*');
    return response;
  },
  getProduct: async (maybeBody) => {
    const body = isBody(maybeBody);
    const response = await supabase
      .from('products')
      .select('*')
      .eq('id', 'id' in body ? body.id : '')
      .single();
    return {
      data: response.data,
      error: response.error,
    };
  },
  getProductSizes: async (maybeBody) => {
    const body = isBody(maybeBody);
    const response = await supabase
      .from('product_sizes')
      .select('*')
      .eq('product_id', 'id' in body ? body.id : '');
    return {
      data: response.data,
      error: response.error,
    };
  },
  getProductVariants: async (maybeBody) => {
    const body = isBody(maybeBody);
    if ('gID' in body) {
      const response = await supabase
        .from('product_variants')
        .select('*')
        .eq('product_id', body.gID ?? '');

      return {
        data: response.data,
        error: response.error,
      };
    }
    throw new Error('Body is incompatible with expected type');
  },
  getProductVariantById: async (maybeBody) => {
    const body = isBody(maybeBody);
    if ('variantId' in body) {
      return await supabase
        .from('product_variants')
        .select('*')
        .eq('id', body.variantId)
        .single();
    }
    throw new Error(bodyIncompatibleError('product_variants'));
  },
  getProductSizeById: async (maybeBody) => {
    const body = isBody(maybeBody);
    if ('sizeId' in body) {
      return await supabase
        .from('product_sizes')
        .select('*')
        .eq('id', body.sizeId)
        .single();
    }
    throw new Error(bodyIncompatibleError('product_variants'));
  },
};

export const productMutations: RTKMethods<ProductsMutationMethondNames> = {
  changeProductVariantQuantity: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('variantToChange' in body) {
      const { quantity, variantId } = body.variantToChange;

      const { data: variantQuantity, error: variantError } = await supabase
        .from('product_variants')
        .select('count')
        .eq('id', variantId)
        .single();
      if (variantError) {
        throw new Error('Error while fetching variant quantity');
      }
      if (variantQuantity) {
        if (quantity <= variantQuantity.count) {
          const newQuantity = variantQuantity.count - quantity;
          return await supabase
            .from('product_variants')
            .update({ count: newQuantity })
            .eq('id', variantId);
        } else if (quantity > variantQuantity.count) {
          throw new Error(
            `Cannot change arithmetic operation with quantity more then product varaint's count `
          );
        }
      }
    }
    throw new Error(bodyIncompatibleError('changeProductVariantQuantity'));
  },
  changeProductSizeQuantity: async (maybeBody) => {
    const body = isBody(maybeBody);

    if ('sizeToChange' in body) {
      const { quantity, sizeId } = body.sizeToChange;

      const { data: sizeQuantity, error: variantError } = await supabase
        .from('product_sizes')
        .select('count')
        .eq('id', sizeId)
        .single();
      if (variantError) {
        throw new Error('Error while fetching variant quantity');
      }
      if (sizeQuantity) {
        if (quantity <= sizeQuantity.count) {
          const newQuantity = sizeQuantity.count - quantity;
          return await supabase
            .from('product_variants')
            .update({ count: newQuantity })
            .eq('id', sizeId);
        } else if (quantity > sizeQuantity.count) {
          throw new Error(
            `Cannot change arithmetic operation with quantity more then product size's count `
          );
        }
      }
    }
    throw new Error(bodyIncompatibleError('changeProductSizeQuantity'));
  },
};
