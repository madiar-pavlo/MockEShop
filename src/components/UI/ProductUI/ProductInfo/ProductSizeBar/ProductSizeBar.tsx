import { ToggleButtonGroup, Typography } from '@mui/material';
import ToggleSizeButton from '../../ToggleButtons/ToggleSizeButton/ToggleSizeButton';
import { ProductSize } from '@services/Supabase/supabase.types';
import {
  ProductInfoContext,
  TProductInfoContext,
} from '@entities/products/interface/products/contexts/productInfoContext';
import { useAppContext } from '@utils/global-hooks/useAppContext';


const ProductSizeBar = ({ sizes }: { sizes: ProductSize[] }) => {
  const { selectedSize, setSelectedSize } =
    useAppContext<TProductInfoContext>(ProductInfoContext);

  const chooseSize = selectedSize ? (
    ''
  ) : (
    <span style={{ color: 'red' }}>choose size please *</span>
  );

  const handleSizeChange = (
    _: React.MouseEvent<HTMLElement>,
    newSize: {
      id: string;
      count: number;
    }
  ) => {
    if (selectedSize) {
      if (newSize.id === selectedSize.id) {
        setSelectedSize(null);
      } else if (newSize.id !== selectedSize.id) {
        setSelectedSize(newSize);
      }
    } else {
      setSelectedSize(newSize);
    }
  };
  return (
    <>
      <Typography variant='body1' gutterBottom>
        Select Size: {chooseSize}
      </Typography>
      <ToggleButtonGroup
        value={selectedSize}
        exclusive
        onChange={handleSizeChange}
        sx={{ flexWrap: 'wrap', gap: 1 }}
      >
        {sizes.map((size) => (
          <ToggleSizeButton size={size} key={size.id} />
        ))}
      </ToggleButtonGroup>
    </>
  );
};

export default ProductSizeBar;
