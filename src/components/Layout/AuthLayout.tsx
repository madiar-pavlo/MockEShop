import { useGetSessionQuery } from '@entities/auth/API/api';
import { Box, Button, Typography } from '@mui/material';
import NotFoundPage from '@pages/main/notFound/NotFoundPage';
import Loader from '@UI/MainUI/Loader/Loader';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetSessionQuery({});

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <NotFoundPage />;
  }
  if (data) {
    const {
      data: { isAuth },
    } = data;
    if (location.pathname === '/auth' && !isAuth) {
      return (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
        >
          <Typography variant='h4' gutterBottom>
            Welcome to Our Platform ❤️
          </Typography>
          <Typography variant='body1' gutterBottom>
            Choose your path and let's get started!
          </Typography>
          <Box display='flex' gap={2} mt={3}>
            <Button variant='contained' onClick={() => navigate('login')}>
              Login
            </Button>
            <Button variant='outlined' onClick={() => navigate('register')}>
              Register
            </Button>
          </Box>
        </Box>
      );
    }
    return <Outlet />;
  }
  return <></>;
};

export default AuthLayout;
