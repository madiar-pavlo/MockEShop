import { Box, Typography, Grid2 } from '@mui/material';
import { useGetPreviewProductsQuery } from '@entities/products/API/api';
import ProductList from '@UI/ProductUI/ProductsList/ProductsList';
import CatalogSkeleton from '@UI/MainUI/Skeletons/CatalogSkeleton';

const PreviewProducts = () => {
  const { data, isLoading } = useGetPreviewProductsQuery();

  if (isLoading) {
    return <CatalogSkeleton skeletonsCount={3} />;
  }
  if (data) {
    return (
      <Box>
        <Typography
          variant='h4'
          sx={{
            mb: 4,
            textAlign: 'center',
            color: '#212121',
            fontSize: {
              xs: '1.5rem', // small screen
              sm: '2rem', // medium screen
              md: '2.5rem', // large screen
            },
          }}
        >
          Trending Products
        </Typography>
        <Grid2 container spacing={4} justifyContent='center'>
          {data ? (
            <ProductList productsValues={data} />
          ) : (
            <Typography>Error by fetching Product</Typography>
          )}
        </Grid2>
      </Box>
    );
  }
  return (
    <>
      {' '}
      <Box sx={{ marginTop: '100vh' }}>
        <Typography variant='h4' gutterBottom>
          We have some problem with loading preview products
        </Typography>
      </Box>
    </>
  );
};

export default PreviewProducts;
