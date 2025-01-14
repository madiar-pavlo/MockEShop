import { useState } from 'react';
import { OrderContext } from '../orderContext';
import Order from '../../Order';

const OrderContextWrapper = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    cardNumber: '',
    cardHolder: '',
    cardExpirationDate: '',
    cardCvv: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const initalValue = {
    formData,
    setFormData,
    handleChange,
  };

  return (
    <OrderContext.Provider value={initalValue}>
      <Order />
    </OrderContext.Provider>
  );
};

export default OrderContextWrapper;
