import { Box, Typography, Avatar, Skeleton, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  useGetProductByIdQuery,
  useGetProductSizeByIdQuery,
  useGetProductVariantByIdQuery,
} from '@entities/products/API/api';
import type { CartItem, OrderItem } from '@services/Supabase/supabase.types';
import { useDeleteCartItemMutation } from '@entities/cart/API/api';
import { useNavigate } from 'react-router-dom';
import { transformGId } from '@entities/products/API/utils/transformGId';

const CartItem = ({
  cartItem,
  withoutCloseIcon,
}: {
  cartItem: CartItem | OrderItem;
  withoutCloseIcon?: boolean;
}) => {
  const navigate = useNavigate();
  const {
    data: product,
    isLoading: isProductLoading,
    error: productError,
  } = useGetProductByIdQuery({ id: cartItem.product_id });

  const {
    data: size,
    isLoading: isSizeLoading,
    error: sizeError,
  } = useGetProductSizeByIdQuery({ sizeId: cartItem.product_size_id });

  const {
    data: variant,
    isLoading: isVariantLoading,
    error: variantError,
  } = useGetProductVariantByIdQuery({ variantId: cartItem.product_variant_id });
  const [deleteCartItem, { error: deleteError }] = useDeleteCartItemMutation();

  const onDeleteButtonClick = () => {
    deleteCartItem({
      deleteCartItemId: cartItem.id,
    });
  };

  if (productError || sizeError || variantError || deleteError) {
    return (
      <Typography color='error'>Failed to load product details.</Typography>
    );
  }
  if (size && variant && product) {
    return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        position='relative'
        sx={{ paddingBottom: '8px' }}
      >
        {isProductLoading || isSizeLoading || isVariantLoading ? (
          <Skeleton
            variant='rectangular'
            animation='pulse'
            width='100%'
            height={56}
          />
        ) : (
          <>
            <Box
              onClick={() => {
                navigate(
                  `/catalog/product/${product.id}/${transformGId(product.gID)}`
                );
              }}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              flexGrow='1'
              sx={{
                transitionDuration: '0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
                },
              }}
            >
              {' '}
              <Avatar
                src={variant.variant_images_urls ?? 'image'}
                alt={`${product.name} image`}
                sx={{ width: 56, height: 56 }}
                variant='square'
              />
              {/* Описание товара */}
              <Box flex='1' ml={2}>
                <Typography variant='body1' fontWeight='bold'>
                  {product.name}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Color: {variant.color} | Size: {size.size || 'N/A'}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Quantity: {cartItem.quantity}
                </Typography>
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              sx={{
                position: 'absolute',
                top: '-10px',
                right: 0,
              }}
            >
              {' '}
              <Box>
                <Typography variant='body1' fontWeight='bold'>
                  ${cartItem.price}
                </Typography>
              </Box>
              {withoutCloseIcon ? (
                <></>
              ) : (
                <IconButton onClick={() => onDeleteButtonClick()}>
                  <CloseIcon color='primary' />
                </IconButton>
              )}
            </Box>
          </>
        )}
      </Box>
    );
  }

  return null;
};

export default CartItem;
