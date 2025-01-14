import { Products } from '@entities/products/API/types';
import { Box } from '@mui/material';
import { Product } from '@services/Supabase/supabase.types';
import ProductCard from '@UI/ProductUI/ProductCard/ProductCard';

const ProductList = ({
  products,
  productsValues,
}: {
  products?: Products;
  productsValues?: (Product | undefined)[];
}) => {
  if (products) {
    const productsList: (Product | undefined)[] = Object.values(products);
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3, 
          justifyContent: 'center', 
        }}
      >
        {productsList.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Box>
    );
  }
  if (productsValues) {
    console.log('products: ', productsValues)
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3, 
          justifyContent: 'center', 
        }}
      >
        {productsValues.map((product) => {
          return <ProductCard product={product} key={product?.id} />;
        })}
      </Box>
    );
  }
};

export default ProductList;
