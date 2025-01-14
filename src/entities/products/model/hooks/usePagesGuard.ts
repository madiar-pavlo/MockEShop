import { TSetState } from '@appTypes/react';
import { GetProductcCountResponse } from '@entities/products/API/types';
import { useEffect } from 'react';

interface IUserPagesGuardProps {
  countOfProducts: GetProductcCountResponse['data'] | undefined;
  currentPage: number;
  setCanLoad: TSetState<boolean>;
  pageLimit: number;
}

const usePagesGuard = ({
  countOfProducts,
  currentPage,
  setCanLoad,
  pageLimit,
}: IUserPagesGuardProps) => {
  useEffect(() => {
    if (countOfProducts) {
      if (countOfProducts.count) {
        setCanLoad(currentPage < countOfProducts.count / pageLimit);
      }
    }
  }, [countOfProducts, currentPage]);
};

export default usePagesGuard;
