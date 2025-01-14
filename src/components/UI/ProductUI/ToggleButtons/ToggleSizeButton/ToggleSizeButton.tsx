import {
  ProductInfoContext,
  TProductInfoContext,
} from '@entities/products/interface/products/contexts/productInfoContext';
import { ToggleButton } from '@mui/material';
import { ProductSize } from '@services/Supabase/supabase.types';
import { useAppContext } from '@utils/global-hooks/useAppContext';

const ToggleSizeButton = ({ size }: { size: ProductSize }) => {
  const { selectedSize } =
    useAppContext<TProductInfoContext>(ProductInfoContext);
  return (
    <ToggleButton
      value={{
        id: size.id,
        count: size.count,
      }}
      selected={selectedSize?.id === size.id}
      disabled={size.count === 0}
      sx={{
        px: 2,
        py: 1,
        textTransform: 'none',
        fontSize: '14px',
      }}
    >
      {size.size} ({size.count} left)
    </ToggleButton>
  );
};

export default ToggleSizeButton;
