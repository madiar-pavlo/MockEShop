import ErrorPage from '@pages/main/error/ErrorPage';
import ProductList from '@UI/ProductUI/ProductsList/ProductsList';
import { useMemo, useRef, useState } from 'react';
import CatalogSkeleton from '@UI/MainUI/Skeletons/CatalogSkeleton';
import {
  useGetAllProductsQuery,
  useGetProductsCountQuery,
  useGetProductsListQuery,
} from '@entities/products/API/api';
import { useObserver } from '@entities/products/model/hooks/useObserver';
import usePagesGuard from '@entities/products/model/hooks/usePagesGuard';
import NoProductsFound from '@UI/ProductUI/NoPruductsFound/NoProductsFound';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import {
  ProductsContext,
  ProductsListContext,
} from './contexts/productsContext';

const pageLimit = 9;

const Products = () => {
  const context = useAppContext<ProductsListContext>(ProductsContext);

  const { isWantToFilter, debouncedSearch, searchParams } = context;

  const isParams = Boolean(
    searchParams.get('price') || searchParams.get('category')
  );

  console.log('isParams', isParams);

  const [currentPage, setCurrentPage] = useState(1);
  const observerableElement = useRef<HTMLDivElement>(null);
  const [canLoad, setCanLoad] = useState(true);
  const { data, isLoading, error, isFetching } = useGetProductsListQuery({
    page: currentPage,
    productsCount: pageLimit,
  });
  const { data: countOfProducts } = useGetProductsCountQuery();

  const queryParams = useMemo(
    () => ({
      category: searchParams.get('category'),
      name: debouncedSearch.toUpperCase() ?? undefined,
      price: searchParams.get('price')
        ? searchParams
            .get('price')
            ?.split(',')
            .map((i) => Number(i))
        : undefined,
    }),
    [debouncedSearch, searchParams, isWantToFilter]
  );

  const {
    data: allProducts,
    isLoading: IsAllProductsLoading,
    isFetching: isAllProductsFetching,
  } = useGetAllProductsQuery({ options: queryParams });
  useObserver({
    canLoad,
    isFetching,
    ref: observerableElement,
    callback: () => {
      setCurrentPage((prev) => prev + 1);
    },
  });

  usePagesGuard({
    countOfProducts,
    currentPage,
    setCanLoad,
    pageLimit,
  });
  if (isLoading || IsAllProductsLoading || isAllProductsFetching) {
    return <CatalogSkeleton />;
  }
  if (error) {
    return <ErrorPage />;
  }
  if (data && !isWantToFilter && !isParams) {
    const { products } = data;
    return (
      <>
        <ProductList products={products} />
        <div
          ref={observerableElement}
          style={{
            height: '50px',
            position: 'absolute',
            bottom: '-100px',
            width: '1px',
          }}
        ></div>
      </>
    );
  }
  if ((isWantToFilter && allProducts) || (allProducts && isParams)) {
    if (allProducts.length === 0) {
      return <NoProductsFound />;
    }
    return <ProductList productsValues={allProducts} />;
  }
};

export default Products;
