import { ProductVariant } from '@services/Supabase/supabase.types';
import ToggleColorButton from './ToggleColorButton';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import {
  ProductInfoContext,
  TProductInfoContext,
} from '@entities/products/interface/products/contexts/productInfoContext';
import { useEffect } from 'react';

interface Properties {
  colorMap: Record<string, string>;
  variant: ProductVariant;
}

const ToggleColorButtonMapWrapper = ({
  colorMap,
  variant,
}: Properties) => {
  const {
    onColorChange,
    selectedColor,
    colorImageLoaded,
    swiperImageLoaded,
    setIsColorNull,
    setColor,
  } = useAppContext<TProductInfoContext>(ProductInfoContext);
  useEffect(() => {
    if (!variant.color) {
      setIsColorNull(true);
    } else if (variant.color) {
      const color = colorMap[variant?.color];
      if (!color) {
        setColor(variant.color);
      }
    }
  }, [variant]);
  if (variant.color) {
    const color = colorMap[variant?.color];
    return (
      <ToggleColorButton
        color={color}
        variant={variant}
        onChange={() => onColorChange(variant)}
        selected={selectedColor === variant.color}
        disabled={
          variant.count === 0 || !colorImageLoaded || !swiperImageLoaded
        }
      />
    );
  }
};

export default ToggleColorButtonMapWrapper;