import AuthForm from '@UI/AuthUI/AuthForm';
import { useLoginMutation } from './API/api';
import { googleLogin, loginUser } from './model/loginUser';
import { useAppDispatch } from '@app/store';
import { TUserEmail, TUserPassword } from './auth.types';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import AppBox from '@UI/MainUI/AppBox/AppBox';
import Loader from '@UI/MainUI/Loader/Loader';

const AuthLogin = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const onSignInFormSubmit = (email: TUserEmail, password: TUserPassword) => {
    dispatch(
      loginUser(login, {
        email,
        password,
      })
    );
  };
  const onGoogleButtonClick = () => {
    dispatch(googleLogin());
  };
  if (isLoading) {
    return <Loader/>;
  }
  if (error) {
    console.log('eaefas: ', error);
  }
  return (
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
      <Container component='div' sx={{ maxWidth: '900px !important' }}>
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
            <AuthForm
              onAuthFormSubmit={onSignInFormSubmit}
              authFormType='LOG_IN'
              onGoogleButtonClick={onGoogleButtonClick}
              errorCode={error as string}
            />
          </CardActions>
        </Card>
      </Container>
    </AppBox>
  );
};

export default AuthLogin;
