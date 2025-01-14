import { useAppContext } from '@utils/global-hooks/useAppContext';
import { Box, Button, Grid2, Paper, Typography } from '@mui/material';
import FieldWrapper from '@UI/OrderUI/FormFields/FieldWrapper';
import {
  OrderContext,
  OrderContextInterface,
} from './context/orderContext';
import OrderCardContextWrapper from './context/wrappers/orderCardContextWrapper';

const OrderForm = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const { formData } = useAppContext<OrderContextInterface>(OrderContext);

  const isFormCompleted = Object.values(formData).every((i) => i !== '');
  return (
    <Grid2 container spacing={4} flexDirection={'row'} marginTop={1}>
      {/* Personal Information */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant='h6' gutterBottom>
            Your Information
          </Typography>
          <Box component='form' noValidate autoComplete='off'>
            <FieldWrapper
              label='First Name'
              name='firstName'
              placeholder='Elon'
            />
            <FieldWrapper
              label='Last Name'
              name='lastName'
              placeholder='Musk'
            />
            <FieldWrapper
              label='Country'
              name='country'
              placeholder='Czech Republic'
            />
            <FieldWrapper label='City' name='city' placeholder='Prague' />
            <FieldWrapper
              label='Street'
              name='street'
              placeholder='Airmax 542'
            />
            <FieldWrapper
              label='House Number'
              name='houseNumber'
              placeholder='5'
            />
          </Box>
        </Paper>
      </Grid2>

      {/* Payment Information */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Paper elevation={3} sx={{ p: 3 }} style={{ height: '100%' }}>
          <Typography variant='h6' gutterBottom>
            Payment Information
          </Typography>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            height='100%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            paddingBlock={2}
          >
            <FieldWrapper
              label='Card Holder'
              name='cardHolder'
              placeholder='James Bond'
            />
            <OrderCardContextWrapper />

            <Button
              variant='contained'
              color='primary'
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => handleSubmit()}
              disabled={!isFormCompleted}
            >
              Submit Order
            </Button>
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default OrderForm;
