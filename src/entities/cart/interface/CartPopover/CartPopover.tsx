import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { TSetState } from '@appTypes/react';
import CartItem from './CartItem';

type Props = {
  cartItems: CartItem[];
  id: 'simple-popover' | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  setAnchorEl: TSetState<HTMLButtonElement | null>;
};

const CartPopover = ({
  cartItems,
  id,
  open,
  anchorEl,
  handleClose,
  setAnchorEl,
}: Props) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc = acc + item.price);
  }, 0);
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box
        sx={{
          width: 'clamp(300px, 50vw, 500px)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='overline' fontSize={20}>
            Cart
          </Typography>
          <IconButton onClick={() => setAnchorEl(null)}>
            <CloseIcon color='primary' />
          </IconButton>
        </Box>

        <Divider sx={{ my: 0 }} />
        <Box marginTop={4}>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id}>
                <CartItem cartItem={item} />

                <Divider sx={{ my: 0 }} />
              </div>
            ))
          ) : (
            <Typography variant='h4' gutterBottom>
              Your cart is empty.
            </Typography>
          )}
        </Box>
        <Typography variant='h6' fontWeight='bold'>
          Total Price: ${totalPrice}
        </Typography>
        <Tooltip title={'To checkout you cart should not be empty'}>
          <Box sx={{ marginTop: '16px' }}>
            {' '}
            <Button
              fullWidth
              component={RouterLink}
              variant='contained'
              to='/order'
              onClick={() => setAnchorEl(null)}
              disabled={cartItems.length === 0}
            >
              Go to Checkout
            </Button>
          </Box>
        </Tooltip>
      </Box>
    </Popover>
  );
};

export default CartPopover;
