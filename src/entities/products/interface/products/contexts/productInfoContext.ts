import { TSetState } from '@appTypes/react';
import { ProductVariant } from '@services/Supabase/supabase.types';
import { createContext } from 'react';

export interface TProductInfoContext {
  selectedSize: {
    id: string;
    count: number;
  } | null;
  setSelectedSize: TSetState<{
    id: string;
    count: number;
  } | null>;
  swiperImageLoaded: boolean;
  setSwiperImageLoaded: TSetState<boolean>;
  colorImageLoaded: boolean;
  setColorImageLoaded: TSetState<boolean>;
  selectedColor: string | null;
  setSelectedColor: TSetState<string | null>;
  selectedVariant: {
    url: string | null;
    id: string;
    count: number;
  } | null;
  setSelectedVariant: TSetState<{
    url: string | null;
    id: string;
    count: number;
  } | null>;
  onColorChange: (variant: ProductVariant) => void;
  isColorNull: boolean;
  setIsColorNull: TSetState<boolean>;
  color: string;
  setColor: TSetState<string>;
  isVariantSelected: boolean;
  setIsVariantSelected: TSetState<boolean>;
  isSizeSelected: boolean;
  setIsSizeSelected: TSetState<boolean>;
  quantity: string;
  setQuantity: TSetState<string>;
}

export const ProductInfoContext = createContext<
  TProductInfoContext | undefined
>(undefined);
