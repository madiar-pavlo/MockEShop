import { TSetState } from '@appTypes/react';
import { createContext } from 'react';

export interface OrderCardContextInterface {
  cardNumber: string;
  setCardNumber: TSetState<string>;
  cardExpDate: string;
  setCardExpDate: TSetState<string>;
  cardCvv: string;
  setCardCvv: TSetState<string>;
  isCardNumberCompleted: boolean;
  setIsCardNumberCompleted: TSetState<boolean>;
  isCardExpCompleted: boolean;
  setIsCardExpCompleted: TSetState<boolean>;
  isCardCvvCompleted: boolean;
  setIsCardCvvCompleted: TSetState<boolean>;
}

export const OrderCardContext = createContext<
  OrderCardContextInterface | undefined
>(undefined);
