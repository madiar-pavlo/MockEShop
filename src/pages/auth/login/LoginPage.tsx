import Login from '@entities/auth/authLogin';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import AppBox from '@UI/MainUI/AppBox/AppBox';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';

const LoginPage = () => {
  return (
    <PageWrapper>
      <AppBox
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          padding: 2,
          flexGrow: 1,
        }}
      >
        <Container component='div' maxWidth='sm'>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 3,
              boxShadow: 4,
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ width: '100%', textAlign: 'center' }}>
              <Typography
                variant='h4'
                component='h1'
                gutterBottom
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                LOG IN
              </Typography>
              <Typography
                variant='body1'
                sx={{ marginBottom: 2, color: 'text.secondary' }}
              >
                Access your account by signing in below.
              </Typography>
            </CardContent>
            <Divider sx={{ width: '100%' }} />
            <CardActions
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 2,
              }}
            >
              <Login />
            </CardActions>
          </Card>
        </Container>
      </AppBox>
    </PageWrapper>
  );
};

export default LoginPage;
