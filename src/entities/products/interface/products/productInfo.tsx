import ErrorPage from '@pages/main/error/ErrorPage';
import Loader from '@UI/MainUI/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  useLazyGetProductByIdQuery,
  useLazyGetProductSizesQuery,
  useLazyGetProductVariantsQuery,
} from '@entities/products/API/api';
import ProductInfoCard from '@UI/ProductUI/ProductInfo/ProductInfoCard/ProductInfoCard';

const ProductInfo = () => {
  const { productId, productGId } = useParams();
  const [
    getProductVariants,
    {
      data: variants,
      isLoading: isProductVarianstLoading,
      error: variantsError,
    },
  ] = useLazyGetProductVariantsQuery();
  const [
    getProduct,
    { data: product, isLoading: isProductByIdLoading, error: productByIdError },
  ] = useLazyGetProductByIdQuery();
  const [
    getProductSizes,
    { data: sizes, isLoading: isProductSizesLoading, error: sizesError },
  ] = useLazyGetProductSizesQuery();

  useEffect(() => {
    if (productId && productGId) {
      getProductSizes({ id: productId });
      getProduct({ id: productId });
      getProductVariants({ gID: `gid://shopify/Product/${productGId}` });
    }
  }, [productId, productGId]);

  if (
    isProductVarianstLoading ||
    isProductByIdLoading ||
    isProductSizesLoading
  ) {
    return <Loader />;
  }
  if (productByIdError || variantsError || sizesError) {
    return <ErrorPage />;
  }
  if (product && variants && sizes) {
    return (
      <ProductInfoCard product={product} variants={variants} sizes={sizes} />
    );
  }
};

export default ProductInfo;
