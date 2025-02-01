import { useGetUserQuery } from '@entities/user/API/api';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import ErrorPage from '@pages/main/error/ErrorPage';
import Loader from '@UI/MainUI/Loader/Loader';
import StyledLink from '@UI/MainUI/NavigationUI/StyledLink';
import { Link as RouterLink } from 'react-router-dom';

const Success = () => {
  const { data, isLoading, error } = useGetUserQuery();

  // Получаем параметры из URL хэша
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace('#', ''));
  const errorParam = params.get('error');
  const errorDescription = params.get('error_description');

  // Если есть ошибка, показываем сообщение с грустным смайликом
  if (errorParam) {
    console.log('SFDGKHLJFTGSHLPRTK: ', errorParam);
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.default',
          padding: 2,
          flexGrow: 1,
        }}
      >
        <Typography
          variant='h3'
          sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}
        >
          😞 Oops! Something went wrong.
        </Typography>
        <Typography variant='h6' sx={{ marginBottom: 4, color: '#555' }}>
          {errorDescription ||
            'An unknown error occurred. Please try again later.'}
        </Typography>
        <StyledLink component={RouterLink} to='/' color='primary'>
          Go to Home
        </StyledLink>
      </Box>
    );
  }

  // Обрабатываем нормальную загрузку данных
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (data) {
    const { user } = data;
    if (user) {
      const {
        email,
        user_metadata: { name, avatar_url },
        last_sign_in_at,
        created_at,
      } = user;

      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background.default',
            padding: 2,
            flexGrow: 1,
          }}
        >
          <Typography
            variant='h3'
            sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}
          >
            Hooray! You've successfully registered!
          </Typography>
          <Typography variant='h6' sx={{ marginBottom: 4, color: '#555' }}>
            Welcome to our system!
          </Typography>

          <Avatar
            src={avatar_url}
            alt={name}
            sx={{ width: 100, height: 100, mx: 'auto', marginBottom: 3 }}
          />
          <Card
            sx={{ width: '100%', maxWidth: 400, marginBottom: 3, boxShadow: 3 }}
          >
            <CardContent>
              <Typography variant='h5' sx={{ mt: 2 }}>
                {name}
              </Typography>
              <Typography variant='body2'>
                <strong>Email:</strong> {email}
              </Typography>
              <Typography variant='body2'>
                <strong>Joined:</strong>{' '}
                {new Date(created_at).toLocaleDateString()}
              </Typography>
              <Typography variant='body2'>
                <strong>Last Signed In:</strong>{' '}
                {new Date(last_sign_in_at ?? 0).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
          <StyledLink component={RouterLink} to='/' color='primary'>
            Go to Home
          </StyledLink>
        </Box>
      );
    }
  }

  return null;
};

export default Success;
