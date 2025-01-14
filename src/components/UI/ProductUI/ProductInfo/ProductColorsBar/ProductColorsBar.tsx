import {
  ProductInfoContext,
  TProductInfoContext,
} from '@entities/products/interface/products/contexts/productInfoContext';
import { Box, Typography } from '@mui/material';
import { ProductVariant } from '@services/Supabase/supabase.types';
import ToggleColorButtonMapWrapper from '@UI/ProductUI/ToggleButtons/ToggleColorButton/ToggleColorButtonMapWrapper';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import { useEffect } from 'react';

type Props = {
  variants: ProductVariant[];
};

const colorMap: Record<string, string> = {
  Red: '#6E3E4C',
  Purple: '#393158',
  Ocean: '#2A5259',
  Olive: '#706944',
  Green: '#2D5D44',
};

const ProductColorsBar = ({ variants }: Props) => {
  const { isColorNull, color, selectedVariant, setSelectedVariant } =
    useAppContext<TProductInfoContext>(ProductInfoContext);

  const chooseVariant = selectedVariant ? (
    ''
  ) : (
    <span style={{ color: 'red' }}>choose color please *</span>
  );
  useEffect(() => {
    if (color) {
      const avaliableVariants = variants.filter((item) => item.count >= 1);
      const avaliableVariant = avaliableVariants[avaliableVariants.length - 1];
      setSelectedVariant({
        url: avaliableVariant.variant_images_urls,
        id: avaliableVariant.id,
        count: avaliableVariant.count,
      });
    }
  }, [color]);
  return (
    <>
      <Typography variant='body1' gutterBottom>
        {isColorNull ? (
          `Available in one color`
        ) : color ? (
          `Color: ${color}`
        ) : (
          <>Color Variants: {chooseVariant}</>
        )}
      </Typography>
      {isColorNull || color ? (
        ''
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {variants?.length ? (
            variants.map((variant) => (
              <ToggleColorButtonMapWrapper
                colorMap={colorMap}
                variant={variant}
                key={variant.id}
              />
            ))
          ) : (
            <Typography variant='body2' color='textSecondary'>
              No color variants available.
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};

export default ProductColorsBar;
