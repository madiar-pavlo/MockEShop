import { TSetState } from '@appTypes/react';
import { createContext } from 'react';

export type FormDataType = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  cardNumber: string;
  cardHolder: string;
  cardExpirationDate: string;
  cardCvv: string;
};

export interface OrderContextInterface {
  formData: FormDataType;
  setFormData: TSetState<FormDataType>;
  handleChange: (e: any) => void;
}

export const OrderContext = createContext<OrderContextInterface | undefined>(
  undefined
);
