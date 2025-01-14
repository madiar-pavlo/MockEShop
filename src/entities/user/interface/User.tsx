import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  ListItem,
  Divider,
  CardMedia,
  Button,
} from '@mui/material';
import { lazy } from 'react';
import { useGetUserQuery } from '../API/api';
import Loader from '@UI/MainUI/Loader/Loader';
import HistoryIcon from '@mui/icons-material/History';
import { useGetOrdersQuery } from '@entities/orders/API/api';
import { Link as RouterLink } from 'react-router-dom';

const ErrorPage = lazy(() => import('@pages/main/error/ErrorPage'));

const User = () => {
  const { data, isLoading, error } = useGetUserQuery();
  const {
    data: orders,
    isLoading: isOrdersLoading,
    error: orderError,
  } = useGetOrdersQuery();

  if (isLoading || isOrdersLoading) {
    return <Loader />;
  }
  if (error || orderError) {
    return <ErrorPage />;
  }

  if (data && orders) {
    const { user } = data;
    if (user) {
      const {
        email,
        user_metadata: { name, avatar_url },
        last_sign_in_at,
        created_at,
      } = user;

      return (
        <Box
          sx={{
            width: '100%',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {/* User Info Section */}
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <CardMedia sx={{ padding: 3 }}>
              <Avatar
                src={avatar_url}
                alt={name}
                sx={{ width: 100, height: 100, mx: 'auto' }}
              />
            </CardMedia>
            <CardContent sx={{ pt: 0 }}>
              <Typography variant='h5' sx={{ mt: 2 }}>
                {name}
              </Typography>
              <Typography variant='body2'>
                <strong>Email:</strong> {email}
              </Typography>
              <Typography variant='body2'>
                <strong>Joined:</strong>{' '}
                {new Date(created_at).toLocaleDateString()}
              </Typography>
              <Typography variant='body2'>
                <strong>Last Signed In:</strong>{' '}
                {new Date(last_sign_in_at ?? 0).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>

          {/* Orders Section */}
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: 1,
                  marginBottom: 2,
                }}
              >
                <HistoryIcon /> <Typography variant='h6'>History: </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              {orders.map((order) => (
                <Box key={order.id}>
                  <ListItem
                    disablePadding
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      rowGap: 4,
                      flexDirection: {
                        xs: 'column',
                        sm: 'row',
                      },
                    }}
                  >
                    <Box>
                      <Typography variant='h6'>{`${order.first_name} ${order.last_name}`}</Typography>
                      <Typography variant='body2' color='textSecondary'>
                        <strong>Order placed</strong> on{' '}
                        {new Date(order.created_at).toLocaleDateString()}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        <strong>Status</strong>: {order.status}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        <strong>Total Price</strong>: $
                        {order.total_price.toFixed(2)}
                      </Typography>
                    </Box>
                    <Button
                      component={RouterLink}
                      to={`/order/details/${order.id}`}
                      variant='outlined'
                    >
                      View Details
                    </Button>
                  </ListItem>
                  <Divider sx={{ my: 2 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      );
    }
  }

  return null;
};

export default User;
