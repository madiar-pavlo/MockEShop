import CartItem from '@entities/cart/interface/CartPopover/CartItem';
import { Box, Paper, Typography } from '@mui/material';
import {
  CartItem as CartItemType,
  OrderItem,
} from '@services/Supabase/supabase.types';

const OrderDetails = ({
  cartItems,
  cantDelete,
}: {
  cartItems: (CartItemType | OrderItem)[];
  cantDelete?: boolean;
}) => {
  const totalPrice = cartItems
    ?.reduce((acc, item) => {
      return acc + item.price;
    }, 0)
    .toFixed(2);
  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant='h6' gutterBottom>
            Order Details
          </Typography>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              withoutCloseIcon={cantDelete}
            />
          ))}
          <Typography variant='overline' fontSize='20px' sx={{ mt: 2 }}>
            <strong>Total:</strong> ${totalPrice}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default OrderDetails;
