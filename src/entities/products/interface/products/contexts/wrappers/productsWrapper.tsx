import { useState } from 'react';
import Products from '../../products';
import { ProductsContext } from '../productsContext';
import ProductsFilter from '../../productsFilter';
import { useDebounce } from '@utils/global-hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';

const ProductsWrapper = () => {
  const [isWantToFilter, setIsWantToFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [isOutsideCategory, setIsOutsideCategory] = useState(false);
  const debouncedSearch = useDebounce<string>(search, 500);
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const paramsPriceRange = searchParams.get('price')
    ? searchParams
        .get('price')
        ?.split(',')
        .map((i) => Number(i)) || [0, 300]
    : [0, 300];

  const [priceRange, setPriceRange] = useState<number[]>(paramsPriceRange);

  const debouncedPrice = useDebounce<number[]>(priceRange, 500);
  const contextValue = {
    search,
    setSearch,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    isWantToFilter,
    setIsWantToFilter,
    isOutsideCategory,
    setIsOutsideCategory,
    debouncedPrice,
    debouncedSearch,
    isPriceFilterActive,
    setIsPriceFilterActive,
    searchParams,
    setSearchParams,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      <ProductsFilter />
      <Products />
    </ProductsContext.Provider>
  );
};

export default ProductsWrapper;
