import { useState } from 'react';
import { OrderCardContext } from '../orderCardContext';
import OrderCardFields from '../../OrderCardFields';

const OrderCardContextWrapper = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpDate, setCardExpDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);
  const [isCardExpCompleted, setIsCardExpCompleted] = useState(false);
  const [isCardCvvCompleted, setIsCardCvvCompleted] = useState(false);

  const initalValue = {
    cardNumber,
    setCardNumber,
    cardExpDate,
    setCardExpDate,
    cardCvv,
    setCardCvv,
    isCardNumberCompleted,
    setIsCardNumberCompleted,
    isCardExpCompleted,
    setIsCardExpCompleted,
    isCardCvvCompleted,
    setIsCardCvvCompleted,
  };

  return (
    <OrderCardContext.Provider value={initalValue}>
      <OrderCardFields />
    </OrderCardContext.Provider>
  );
};

export default OrderCardContextWrapper;
