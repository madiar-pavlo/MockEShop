import { TSetState } from '@appTypes/react';
import { createContext } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

export interface ProductsListContext {
  search: string;
  setSearch: TSetState<string>;
  category: string;
  setCategory: TSetState<string>;
  priceRange: number[];
  setPriceRange: TSetState<number[]>;
  isWantToFilter: boolean;
  setIsWantToFilter: TSetState<boolean>;
  isOutsideCategory: boolean;
  setIsOutsideCategory: TSetState<boolean>;
  debouncedPrice: number[];
  debouncedSearch: string;
  isPriceFilterActive: boolean
  setIsPriceFilterActive: TSetState<boolean>
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams
}



export const ProductsContext = createContext<
  ProductsListContext | undefined
>(undefined);
