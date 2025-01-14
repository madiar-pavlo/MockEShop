import { useState } from 'react';
import { ProductInfoContext } from '../productInfoContext';
import ProductInfo from '../../productInfo';
import { ProductVariant } from '@services/Supabase/supabase.types';

const ProductInfoWrapper = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<{
    url: string | null;
    id: string;
    count: number;
  } | null>(null);
  const [selectedSize, setSelectedSize] = useState<{
    id: string;
    count: number;
  } | null>(null);

  const [swiperImageLoaded, setSwiperImageLoaded] = useState(false);
  const [colorImageLoaded, setColorImageLoaded] = useState(false);

  const [isColorNull, setIsColorNull] = useState(false);
  const [color, setColor] = useState('');

  const [isVariantSelected, setIsVariantSelected] = useState(false);

  const [isSizeSelected, setIsSizeSelected] = useState(false);

  const [quantity, setQuantity] = useState<string>('');

  const onColorChange = (variant: ProductVariant) => {
    if (selectedColor === variant.color) {
      setSelectedColor(null);
      setSelectedVariant(null);
    }
    if (selectedColor !== variant.color) {
      setSelectedColor(variant.color);
      setSelectedVariant({
        url: variant.variant_images_urls,
        id: variant.id,
        count: variant.count,
      });
    }
  };

  const contextValue = {
    selectedColor,
    setSelectedColor,
    selectedVariant,
    setSelectedVariant,
    swiperImageLoaded,
    setSwiperImageLoaded,
    colorImageLoaded,
    setColorImageLoaded,
    selectedSize,
    setSelectedSize,
    onColorChange,
    isColorNull,
    setIsColorNull,
    color,
    setColor,
    isVariantSelected,
    setIsVariantSelected,
    isSizeSelected,
    setIsSizeSelected,
    quantity,
    setQuantity,
  };

  return (
    <ProductInfoContext.Provider value={contextValue}>
      <ProductInfo />
    </ProductInfoContext.Provider>
  );
};

export default ProductInfoWrapper;
