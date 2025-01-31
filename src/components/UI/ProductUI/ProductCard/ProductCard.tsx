import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { Product } from '@services/Supabase/supabase.types';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { transformGId } from '@entities/products/API/utils/transformGId';
import StyledLink from '@UI/MainUI/NavigationUI/StyledLink';

const ProductCard = ({ product }: { product: Product | undefined }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      key={product?.id}
      sx={{
        flex: '1 1 300px',
        maxWidth: {
          xs: '230px',
          sm: '250px',
        },
        transition: 'transform 0.3s, box-shadow 0.3s', // Анимация при наведении
        ':hover': {
          transform: 'translateY(-10px)', // Поднимаем карточку
          boxShadow: 6, // Добавляем тень при ховере
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '320px' }}>
        {/* Скелетон до загрузки изображения */}

        <Skeleton
          variant='rectangular'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            paddingBottom: '56.25%',
            display: imageLoaded ? 'none' : 'block',
          }}
        />
        {/* Слайдер с изображениями */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          style={{
            width: '100%',
            borderRadius: '4px 4px 0 0', // Края закруглены сверху
          }}
        >
          {product?.image_urls.map((url, index) => (
            <SwiperSlide key={index}>
              <CardMedia
                component='img'
                image={url}
                alt={product?.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover', // Обрезка по размеру
                  borderRadius: '4px 4px 0 0', // Края закруглены сверху
                  transition: 'opacity 2.5s ease',
                  opacity: imageLoaded ? 1 : 0, // Плавное появление
                }}
                onLoad={() => setImageLoaded(true)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <CardContent>
        <Typography variant='h6' gutterBottom>
          {product?.name}
        </Typography>
        <Typography variant='h5' color='primary'>
          ${product?.price}
        </Typography>
        {/* Отображаем категорию */}
        <Typography variant='body2' color='textSecondary'>
          Category:{' '}
          {product?.category === 'OutsideCategory'
            ? 'Outside Category'
            : product?.category}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto', display: 'flex', justifyContent: 'end' }}>
        <StyledLink
          component={RouterLink}
          variant='h6'
          to={`/catalog/product/${product?.id}/${transformGId(product?.gID ?? '')}`}
        >
          More Info..
        </StyledLink>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
