import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import {
  ProductsContext,
  ProductsListContext,
} from './contexts/productsContext';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import { useEffect, useState } from 'react';
const ProductsFilter = () => {
  const context = useAppContext<ProductsListContext>(ProductsContext);
  const {
    debouncedPrice,
    debouncedSearch,
    category,
    priceRange,
    search,
    setCategory,
    setPriceRange,
    setSearch,
    setIsWantToFilter,
    isPriceFilterActive,
    setIsPriceFilterActive,
    searchParams,
    setSearchParams,
  } = context;

  const [isPriceInParams, setIsPriceInParams] = useState(
    Boolean(searchParams.get('price'))
  );

  const addOrUpdateSearchValue = (key: string, value: string) => {
    const newValue = new URLSearchParams(searchParams.toString());
    newValue.set(key, value);
    setSearchParams(newValue);
  };
  const deleteSearchValue = (key: string) => {
    const newValue = new URLSearchParams(searchParams.toString());
    newValue.delete(key);
    setSearchParams(newValue);
  };
  const paramsCategory = searchParams.get('category');

  useEffect(() => {
    // console.log('Search: ', debouncedSearch);

    const newValue = new URLSearchParams(searchParams.toString());

    if (debouncedSearch) {
      newValue.set('name', `${debouncedSearch.toUpperCase()}`);
    }
    if (isPriceFilterActive || isPriceInParams) {
      newValue.set('price', `${debouncedPrice.toString()}`);
    }
    if (!isPriceFilterActive && !isPriceInParams) {
      newValue.delete('price');
    }

    setSearchParams(newValue);
  }, [debouncedPrice, isPriceFilterActive, searchParams, isPriceInParams]);
  return (
    <>
      <TextField
        label='Search for products'
        variant='outlined'
        fullWidth
        value={search}
        onChange={(element) => {
          setSearch(element.target.value);
          // if (element.target.value !== '') {
          //   addOrUpdateSearchValue(
          //     'name',
          //     `${element.target.value.toUpperCase()}`
          //   );
          // }
          if (
            element.target.value === '' &&
            !isPriceFilterActive &&
            !category
          ) {
            setIsWantToFilter(false);
          } else {
            setIsWantToFilter(true);
          }
        }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        sx={{ marginBottom: '2rem' }}
      />
      <Grid2 container spacing={2} sx={{ marginBottom: '2rem' }}>
        <Grid2 size={{
          xs: 10,
          md: 5
        }} sx={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={paramsCategory ?? category}
              onChange={(element) => {
                if (element.target.value === 'All Categories') {
                  setCategory('');
                  deleteSearchValue('category');
                  if (!isPriceFilterActive && !search) {
                    setIsWantToFilter(isPriceFilterActive);
                  }
                } else {
                  setIsWantToFilter(true);
                  setCategory(element.target.value);
                  addOrUpdateSearchValue('category', element.target.value);
                }
              }}
              label='Category'
            >
              <MenuItem value='All Categories'>All Categories</MenuItem>
              <MenuItem value='Men'>Men</MenuItem>
              <MenuItem value='Women'>Women</MenuItem>
              <MenuItem value='OutsideCategory'>Outside category</MenuItem>
              <MenuItem value='Unisex'>Unisex</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2
          size={{
            xs: 10,
            md: 'grow'
          }}
          sx={{
            display: 'grid',
            width: '100%',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <Typography gutterBottom>Price Range</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            {' '}
            <Tooltip title='Toggle price filter'>
              <Switch
                checked={isPriceFilterActive || isPriceInParams}
                onChange={(_, isChecked) => {
                  console.log(isChecked);
                  setIsPriceFilterActive(isChecked);
                  setIsPriceInParams(isChecked);
                  if (category || search) {
                    console.log('I am here');
                    setIsWantToFilter(true);
                    return;
                  }
                  setIsWantToFilter(isChecked);
                }}
              />
            </Tooltip>
          </Box>
          <Slider
            value={priceRange}
            onChange={(_, newValue) => {
              setPriceRange(newValue as number[]);
              setIsWantToFilter(true);
            }}
            valueLabelDisplay='auto'
            valueLabelFormat={(value) => `$${value}`}
            min={0}
            max={1000}
            disabled={!isPriceFilterActive && !isPriceInParams} // Отключаем слайдер, если фильтр выключен
            sx={{ gridColumn: '1 / 3' }}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default ProductsFilter;
