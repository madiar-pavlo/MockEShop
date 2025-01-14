import {
  ProductInfoContext,
  TProductInfoContext,
} from '@entities/products/interface/products/contexts/productInfoContext';
import { Box, CardMedia, Skeleton } from '@mui/material';
import { Product } from '@services/Supabase/supabase.types';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

type Props = {
  product: Product;
};

const ProductInfoCardMedia = ({ product }: Props) => {
  const {
    swiperImageLoaded,
    setSwiperImageLoaded,
    colorImageLoaded,
    setColorImageLoaded,
    selectedVariant,
  } = useAppContext<TProductInfoContext>(ProductInfoContext);
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'clamp(290px, 51vw, 600px)',
        height: 'auto',
        display: 'flex',
      }}
    >
      {selectedVariant && selectedVariant.url ? (
        <Box
          sx={{
            width: 'clamp(300px, 51vw, 600px)',
          }}
        >
          {!swiperImageLoaded && (
            <Skeleton
              variant='rectangular'
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          )}
          <CardMedia
            component='img'
            image={selectedVariant.url}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0',
              transition: 'opacity 0.3s ease',
              opacity: colorImageLoaded ? 1 : 0,
            }}
            onLoad={() => setColorImageLoaded(true)}
          />
        </Box>
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {product.image_urls.map((url, index) => (
            <SwiperSlide key={index}>
              {!swiperImageLoaded && (
                <Skeleton
                  variant='rectangular'
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}
              <CardMedia
                component='img'
                image={url}
                alt={product.name}
                sx={{
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease',
                  opacity: swiperImageLoaded ? 1 : 0,
                }}
                onLoad={() => {
                  setSwiperImageLoaded(true);
                  setColorImageLoaded(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default ProductInfoCardMedia;
