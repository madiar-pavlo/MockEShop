
import { useAppContext } from '@utils/global-hooks/useAppContext';
import FieldMask from './FieldMask';
import { OrderCardContext, OrderCardContextInterface } from '@entities/orders/interface/context/orderCardContext';

const CardNumberField = () => {
  const {
    cardNumber,
    setCardNumber,
    isCardNumberCompleted,
    setIsCardNumberCompleted,
  } = useAppContext<OrderCardContextInterface>(OrderCardContext);
  return (
    <FieldMask
      setField={setCardNumber}
      field={cardNumber}
      isFieldCompleted={isCardNumberCompleted}
      setIsFieldCompleted={setIsCardNumberCompleted}
      fieldOptions={
        {
          label: 'Card Number',
          name: 'cardNumber',
          dividingSign: '-',
          divisionLength: 4,
          maxValueLength: 16
        }
      }
    />
  );
};

export default CardNumberField;
