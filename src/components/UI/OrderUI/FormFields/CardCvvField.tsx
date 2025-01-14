import { useAppContext } from '@utils/global-hooks/useAppContext';
import FieldMask from './FieldMask';
import {
  OrderCardContext,
  OrderCardContextInterface,
} from '@entities/orders/interface/context/orderCardContext';

const CardCvvField = () => {
  const { cardCvv, setCardCvv, isCardCvvCompleted, setIsCardCvvCompleted } =
    useAppContext<OrderCardContextInterface>(OrderCardContext);
  return (
    <FieldMask
      field={cardCvv}
      setField={setCardCvv}
      isFieldCompleted={isCardCvvCompleted}
      setIsFieldCompleted={setIsCardCvvCompleted}
      fieldOptions={{
        label: 'Card CVV',
        name: 'cardCvv',
        dividingSign: '',
        divisionLength: 3,
        maxValueLength: 3,
      }}
    />
  );
};

export default CardCvvField;
