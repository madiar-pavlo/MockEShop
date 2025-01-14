import { useAppContext } from '@utils/global-hooks/useAppContext';

import FieldMask from './FieldMask';
import {
  OrderCardContext,
  OrderCardContextInterface,
} from '@entities/orders/interface/context/orderCardContext';

const CardExpDateField = () => {
  const {
    cardExpDate,
    setCardExpDate,
    isCardExpCompleted,
    setIsCardExpCompleted,
  } = useAppContext<OrderCardContextInterface>(OrderCardContext);
  return (
    <FieldMask
      setField={setCardExpDate}
      field={cardExpDate}
      isFieldCompleted={isCardExpCompleted}
      setIsFieldCompleted={setIsCardExpCompleted}
      fieldOptions={{
        label: 'Card Expiration Date (MM/YY)',
        name: 'cardExpirationDate',
        dividingSign: '/',
        divisionLength: 2,
        maxValueLength: 4,
      }}
    />
  );
};

export default CardExpDateField;
