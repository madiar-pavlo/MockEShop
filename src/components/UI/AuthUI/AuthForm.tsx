import { useGetSessionQuery } from '@entities/auth/API/api';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { TUserEmail, TUserPassword } from '@entities/auth/auth.types';

interface IAuthFormProps {
  onAuthFormSubmit: (email: TUserEmail, password: TUserPassword) => void;
  onGoogleButtonClick: () => void;
  authFormType: 'LOG_IN' | 'SIGN_UP';
}

const AuthForm = (props: IAuthFormProps) => {
  const [email, setEmail] = useState<TUserEmail>('');
  const [password, setPassword] = useState<TUserPassword>('');
  const { onAuthFormSubmit, authFormType, onGoogleButtonClick } = props;
  const { isLoading: loading } = useGetSessionQuery({});
  return (
    <Box
      component='form'
      display='flex'
      flexDirection='column'
      alignItems='center'
      onSubmit={(event) => {
        event.preventDefault();
        onAuthFormSubmit(email, password);
      }}
      width='100%'
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '1rem' }}
      >
        <Button
          sx={{ display: 'flex', columnGap: '10px', border: '1px solid' }}
          onClick={(event) => {
            event.preventDefault();
            onGoogleButtonClick();
          }}
        >
          <Google />
          <span>SIGN IN/UP WITH GOOGLE</span>
        </Button>
      </Box>
      <Divider sx={{ width: '100%' }} />

      <Box sx={{ paddingTop: '1rem' }}>
        <Typography variant='h5' mb={3} textAlign='center'>
          {authFormType === 'LOG_IN'
            ? 'SIGN IN WITH EMAIL'
            : 'SIGN UP WITH EMAIL'}
        </Typography>
        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          margin='normal'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
          margin='normal'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{ marginTop: 2 }}
          disabled={loading || !email || !password}
        >
          {loading ? <CircularProgress size={24} color='inherit' /> : 'Sign in'}
        </Button>
        {authFormType === 'LOG_IN' ? (
          <Typography textAlign='center' variant='body2' mt={2}>
            Don't have an account?{' '}
            <Link
              component={RouterLink}
              to={'/auth/register'}
              underline='hover'
            >
              Register
            </Link>
          </Typography>
        ) : (
          <Typography textAlign='center' variant='body2' mt={2}>
            Have an account?{' '}
            <Link component={RouterLink} to={'/auth/login'} underline='hover'>
              Sign in
            </Link>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default AuthForm;
