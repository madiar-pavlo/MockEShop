import { Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import {
  useLazyGetOrderByIdQuery,
  useLazyGetOrderItemsQuery,
} from '../API/api';
import { useEffect } from 'react';
import Loader from '@UI/MainUI/Loader/Loader';
import ErrorPage from '@pages/main/error/ErrorPage';
import OrderDetails from './OrderDetails';

const OrderInfo = () => {
  const { orderId } = useParams();
  const [
    getOrder,
    { data: order, isLoading: isOrderLoading, error: orderError },
  ] = useLazyGetOrderByIdQuery();
  const [
    getOrderItems,
    {
      data: orderItems,
      isLoading: isOrderItemsLoading,
      error: orderItemsError,
    },
  ] = useLazyGetOrderItemsQuery();

  useEffect(() => {
    if (orderId) {
      getOrder({
        orderId,
      });
      getOrderItems({
        getOrderItems: {
          orderId,
        },
      });
    }
  }, [orderId]);

  if (isOrderLoading || isOrderItemsLoading) {
    return <Loader />;
  }
  if (orderError || orderItemsError) {
    return <ErrorPage />;
  }
  if (order && orderItems) {
    return (
      <Box component={'section'} width='100%'>
        <Typography
          variant='h1'
          fontSize={30}
          textAlign={'center'}
          textTransform={'uppercase'}
          marginBlock={3}
        >
          Order Information
        </Typography>
        <Paper elevation={3} sx={{ p: 3, marginBottom: 3 }}>
          <Box>
            <Typography variant='h6'>
              {`${order.first_name} ${order.last_name}`}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>Order placed</strong> on{' '}
              {new Date(order.created_at).toLocaleDateString()}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>Status</strong>: {order.status}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>Total Price</strong>: ${order.total_price.toFixed(2)}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>City</strong>: {order.city}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>Country</strong>: {order.country}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>Street</strong>: {order.street}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              <strong>House Number</strong>: {order.house_number}
            </Typography>
          </Box>
        </Paper>

        {/* <Divider sx={{ my: 3 }} /> */}
        <OrderDetails cartItems={orderItems} cantDelete />
      </Box>
    );
  }
};

export default OrderInfo;
