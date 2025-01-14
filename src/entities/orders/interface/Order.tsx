import { Box, Typography } from '@mui/material';
import { useGetCartItemsQuery } from '@entities/cart/API/api';
import OrderDetails from '@entities/orders/interface/OrderDetails';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import { OrderContext, OrderContextInterface } from './context/orderContext';
import OrderForm from './OrderForm';
import {
  useInsertOrderItemsMutation,
  useInsertOrderMutation,
} from '../API/api';
import Loader from '@UI/MainUI/Loader/Loader';
import ErrorPage from '@pages/main/error/ErrorPage';
import { useAppDispatch } from '@app/store';
import { createOrder } from '../model/createOrder';
import { InsertOrderBody } from '../API/types';
import { useEffect } from 'react';
import EmptyCartWarning from '@UI/OrderUI/EmptyCartWarning/EmptyCartWarning';

const Order = () => {
  const { formData } = useAppContext<OrderContextInterface>(OrderContext);

  const dispatch = useAppDispatch();

  const { data: cartItems } = useGetCartItemsQuery();

  const [
    insertOrder,
    { data: order, isLoading: isInsertOrderLoading, error: orderError },
  ] = useInsertOrderMutation();
  const [
    insertOrderItems,
    { isLoading: isInsertOrderItemsLoading, error: orderItemsError },
  ] = useInsertOrderItemsMutation();

  useEffect(() => {
    console.log('ORDER: ', order);
  }, [order]);

  const handleSubmit = () => {
    // Mock submit
    console.log('Order submitted:', formData);
    if (cartItems) {
      const totalPrice = cartItems
        ?.reduce((acc, item) => {
          return acc + item.price; // assuming cartItems have 'price' and 'quantity'
        }, 0)
        .toFixed(2);
      const order: InsertOrderBody = {
        insertOrder: {
          city: formData.city,
          country: formData.country,
          first_name: formData.firstName,
          last_name: formData.lastName,
          house_number: Number(formData.houseNumber),
          street: formData.street,
          total_price: Number(totalPrice),
        },
      };
      const orderItems = cartItems.map((item) => {
        const { id, created_at, ...orderItem } = item;

        return orderItem;
      });

      dispatch(
        createOrder({ order, orderItems, insertOrder, insertOrderItems })
      );
    }
  };

  if (isInsertOrderItemsLoading || isInsertOrderLoading) {
    return <Loader />;
  }
  if (orderError || orderItemsError) {
    return <ErrorPage />;
  }

  if (cartItems) {
    if (cartItems.length > 0) {
      return (
        <Box p={4}>
          <Typography variant='h4' gutterBottom>
            Order Page
          </Typography>
          <OrderDetails cartItems={cartItems} />
          <OrderForm handleSubmit={handleSubmit} />
        </Box>
      );
    } else {
      return <EmptyCartWarning />;
    }
  }
};

export default Order;
