import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useLazyGetOrderByIdQuery } from '../API/api';
import Loader from '@UI/MainUI/Loader/Loader';
import ErrorPage from '@pages/main/error/ErrorPage';

const OrderSuccess = () => {
  const { orderId } = useParams();
  const theme = useTheme();

  const [fetchOrder, { data: order, isLoading, error }] = useLazyGetOrderByIdQuery();

  useEffect(() => {
    if (orderId) {
      fetchOrder({ orderId });
    }
  }, [orderId, fetchOrder]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }
  if (order) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
          padding: theme.spacing(4),
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            padding: theme.spacing(4),
            maxWidth: 600,
            width: '100%',
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <Typography variant="h4" gutterBottom>
            🎉 Order Successfully Placed!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                Thank you for your order, <strong>{order.first_name} {order.last_name}</strong>!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Order ID:</strong> {order.id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                <strong>Shipping Address:</strong><br/>
                {order.street} {order.house_number}, {order.city}, {order.country}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ marginTop: theme.spacing(2) }}>
                Total Amount: <strong>${order.total_price.toFixed(2)}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                component={RouterLink}
                to="/profile"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: theme.spacing(2) }}
              >
                View Order Details in Your Profile
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }
};

export default OrderSuccess;
