import CardNumberField from '@UI/OrderUI/FormFields/CardNumberField';
import CardExpDateField from '@UI/OrderUI/FormFields/CardExpDateField';
import CardCvvField from '@UI/OrderUI/FormFields/CardCvvField';

const OrderCardFields = () => {
  return (
    <>
      <CardNumberField />
      <CardExpDateField />
      <CardCvvField />
    </>
  );
};

export default OrderCardFields;
