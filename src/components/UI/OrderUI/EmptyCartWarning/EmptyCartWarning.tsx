import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link as RouterLink } from 'react-router-dom';
const EmptyCartWarning = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mt: 4,
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
        <CardContent>
          <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
          <Typography variant='h6' gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            You cannot place an order with an empty cart. Please add some items
            first!
          </Typography>
          <Button
            component={RouterLink}
            to='/catalog'
            variant='contained'
            color='primary'
            sx={{ mt: 2 }}
          >
            Go to Shop
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmptyCartWarning;
