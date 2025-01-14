import OrderContextWrapper from '@entities/orders/interface/context/wrappers/orderContextWrapper';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';

const OrderPage = () => {
  return (
    <PageWrapper>
      <OrderContextWrapper />
    </PageWrapper>
  );
};

export default OrderPage;
