import { Box, Typography } from '@mui/material';

const NoProductsFound = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      sx={{ mt: 4, textAlign: 'center' }}
    >
      <Typography variant='h4' gutterBottom>
        No Products Found
      </Typography>
      <Typography variant='body1' color='text.secondary'>
        We couldn't find any products matching your search criteria. Please try
        adjusting your filters or search terms.
      </Typography>
    </Box>
  );
};

export default NoProductsFound;
