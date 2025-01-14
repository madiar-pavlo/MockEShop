import { Container, Typography } from '@mui/material';
import ProductsWrapper from '@entities/products/interface/products/contexts/wrappers/productsWrapper';

const CatalogPage = () => {
  return (
    <Container
      sx={{
        paddingBlock: '2rem',
        position: 'relative',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Catalog
      </Typography>
      <ProductsWrapper />
    </Container>
  );
};

export default CatalogPage;
