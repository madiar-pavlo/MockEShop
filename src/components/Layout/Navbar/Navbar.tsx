import { useGetSessionQuery, useLogoutMutation } from '@entities/auth/API/api';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Badge,
  Menu,
  Typography,
  MenuItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NotFoundPage from '@pages/main/notFound/NotFoundPage';
import {
  ShoppingCart as ShoppingCartIcon,
  AccountCircle,
} from '@mui/icons-material';
import { useGetCartItemsQuery } from '@entities/cart/API/api';
import { useState } from 'react';
import CartPopover from '@entities/cart/interface/CartPopover/CartPopover';
import StyledLink from '@UI/MainUI/NavigationUI/StyledLink';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
  Store as StoreIcon,
} from '@mui/icons-material';

const Navbar = () => {
  const [logout] = useLogoutMutation();
  const { data, error } = useGetSessionQuery();
  const { data: cartItems, error: cartItemsError } = useGetCartItemsQuery();

  const onSignOutClick = () => {
    logout({});
  };
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [menuEl, setMenuEl] = useState<HTMLButtonElement | null>(null);

  const handleCartOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCartClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuEl(null);
  };

  const isMenuOpen = Boolean(menuEl);

  const isCartOpen = Boolean(anchorEl);
  const id = isCartOpen ? 'simple-popover' : undefined;

  if (error || cartItemsError) {
    console.log(error);
    return <NotFoundPage />;
  }

  if (data && cartItems) {
    const { isAuth } = data;
    const cartItemsCount = cartItems.length;
    console.log('Cart Items: ', cartItems);
    return (
      <AppBar position='fixed' component={'header'} sx={{ boxShadow: 3 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Логотип и ссылки */}
          <Box display='flex' sx={{ justifyContent: 'space-between' }}>
            <StyledLink
              component={RouterLink}
              variant='h1'
              to='/'
              fontSize={{
                xs: '16px',
                md: '20px',
              }}
              color='inherit'
            >
              MockEShop
            </StyledLink>
            <StyledLink
              component={RouterLink}
              variant='h6'
              to='/catalog'
              color='inherit'
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            >
              Catalog
            </StyledLink>
          </Box>

          {/* Профиль пользователя и корзина */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isAuth ? (
              <>
                <IconButton
                  onClick={onSignOutClick}
                  component={RouterLink}
                  to='/'
                  color='inherit'
                >
                  <LogoutIcon />
                </IconButton>
                <IconButton
                  color='inherit'
                  aria-describedby={id}
                  onClick={handleCartOpen}
                >
                  <Badge color='error' badgeContent={`${cartItemsCount}`}>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  color='inherit'
                  component={RouterLink}
                  to='/profile'
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'inline-flex',
                    },
                  }}
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
              <Button
                component={RouterLink}
                to='/auth/login'
                color='inherit'
                sx={{
                  textTransform: 'uppercase',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                Sign in
              </Button>
            )}

            <IconButton
              color='inherit'
              onClick={handleMenuOpen}
              sx={{
                display: {
                  xs: 'inline-flex',
                  md: 'none',
                },
              }}
            >
              {menuEl ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        <Menu open={isMenuOpen} anchorEl={menuEl} onClose={handleMenuClose}>
          <MenuItem>
            <Button component={RouterLink} variant='contained' to='/catalog'>
              <IconButton color='inherit'>
                <StoreIcon />
              </IconButton>
              <Typography>Catalog</Typography>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button component={RouterLink} to='/profile' variant='contained'>
              <IconButton color='inherit'>
                <AccountCircle />
              </IconButton>
              <Typography>Profile</Typography>
            </Button>
          </MenuItem>
        </Menu>
        <CartPopover
          id={id}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleClose={handleCartClose}
          cartItems={cartItems}
          open={isCartOpen}
        />
      </AppBar>
    );
  }

  return null;
};

export default Navbar;
