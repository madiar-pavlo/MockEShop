import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  Tooltip,
  Input,
} from '@mui/material';
import ProductInfoCardMedia from '../ProductInfoCardMedia/ProductInfoCardMedia';
import ProductColorsBar from '../ProductColorsBar/ProductColorsBar';
import ProductSizeBar from '../ProductSizeBar/ProductSizeBar';
import {
  Product,
  ProductSize,
  ProductVariant,
} from '@services/Supabase/supabase.types';
import {
  ProductInfoContext,
  TProductInfoContext,
} from '@entities/products/interface/products/contexts/productInfoContext';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import { insertCartItem } from '@entities/cart/model/inserCartItem';
import { useAppDispatch } from '@app/store';
import { useEffect, useState } from 'react';

const ProductInfoCard = ({
  sizes,
  product,
  variants,
}: {
  sizes: ProductSize[];
  product: Product;
  variants: ProductVariant[];
}) => {
  const {
    selectedVariant,
    isColorNull,
    selectedSize,
    color,
    quantity,
    setQuantity,
  } = useAppContext<TProductInfoContext>(ProductInfoContext);

  const [productPrice, setProductPrice] = useState(product.price.toFixed(2));
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Selected Variant: ', selectedVariant);
  }, [selectedVariant]);

  useEffect(() => {
    if (quantity) {
      setProductPrice(
        (Number(product.price.toFixed(2)) * Number(quantity)).toFixed(2)
      );
    } else {
      setProductPrice(product.price.toFixed(2));
    }
  }, [quantity]);

  const maxQuantity =
    selectedSize && selectedVariant
      ? selectedSize.count > selectedVariant.count
        ? selectedVariant.count
        : selectedSize.count
      : color
        ? (selectedSize?.count ?? 0)
        : 0;

  const addedToCartDisabledOn = Boolean(
    !quantity || !selectedSize || (!selectedVariant && !isColorNull && !color)
  );
  const chooseQuantity = quantity ? (
    ''
  ) : (
    <span style={{ color: 'red' }}>choose quantity please *</span>
  );
  const onClick = () => {
    if (selectedVariant && selectedSize && quantity) {
      dispatch(
        insertCartItem({
          product_size_id: selectedSize.id,
          product_variant_id: selectedVariant.id,
          price: Number(quantity) * product.price,
          product_id: product.id,
          quantity: Number(quantity),
        })
      );
      console.log('Added to cart');
      console.log('Selected Size: ', selectedSize);
      console.log('Selected Variant: ', selectedVariant.id);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: 'min-content',
        width: {
          lg: 'auto',
          md: 'min-content',
          xs: 'min-content',
        },
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'column', lg: 'row' },
        }}
      >
        <ProductInfoCardMedia product={product} />{' '}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant='h4' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='h5' color='primary' gutterBottom>
              ${productPrice}
            </Typography>
            <Typography variant='body1' color='textSecondary' paragraph>
              {product.description ?? 'No description available.'}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Category:{' '}
              {product.category === 'OutsideCategory'
                ? 'Outside Category'
                : product?.category}
            </Typography>

            <Divider sx={{ my: 2 }} />
            <ProductColorsBar variants={variants} />

            <Divider sx={{ my: 2 }} />
            <ProductSizeBar sizes={sizes} />

            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant='body1' gutterBottom>
                Select Quantity: {chooseQuantity}
              </Typography>
              <Tooltip
                title={'To choose quantity please choose size and/or color'}
              >
                <Input
                  inputMode='numeric'
                  value={quantity}
                  placeholder={`max. quantity: ${maxQuantity}`}
                  disabled={!maxQuantity}
                  onChange={(event) => {
                    const inputValue = event.target.value;
                    const newValue = inputValue?.replace(/\D/g, '');
                    if (Number(newValue) <= maxQuantity) {
                      setQuantity(newValue);
                    } else {
                      setQuantity(maxQuantity.toString());
                    }
                  }}
                />
              </Tooltip>
            </Box>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
            <Tooltip
              title={`To add product to cart you should choose product's color OR/AND variant`}
            >
              <div>
                <Button
                  variant='outlined'
                  size='large'
                  onClick={() => {
                    onClick();
                  }}
                  disabled={addedToCartDisabledOn}
                >
                  Add to cart
                </Button>
              </div>
            </Tooltip>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductInfoCard;
