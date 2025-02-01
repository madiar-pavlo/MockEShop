import { useEffect, useState } from 'react';
import { useGetSessionQuery } from '@entities/auth/API/api';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { TUserEmail, TUserPassword } from '@entities/auth/auth.types';

interface IAuthFormProps {
  onAuthFormSubmit: (email: TUserEmail, password: TUserPassword) => void;
  onGoogleButtonClick: () => void;
  authFormType: 'LOG_IN' | 'SIGN_UP';
  errorCode: string | undefined;
}
const handleError = (errorCode: string) => {
  const errorMessages: { [key: string]: string } = {
    email_already_exists: 'Email already exists',
    user_not_found: 'User not found',
    invalid_credentials: 'Invalid credentials',
    password_too_short: 'Password is too short',
    password_strength: "Password doesn't meet strength requirements",
    email_verification_required: 'Please verify your email',
    user_disabled: 'User account is disabled',
    session_expired: 'Session has expired. Please log in again',
    over_email_send_rate_limit:
      'For security purposes, you can only request this after 27 seconds.',
  };

  return errorMessages[errorCode] || 'Unknown error';
};

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const regexLowerCase = /[a-z]/;
const regexUpperCase = /[A-Z]/;
const regexDigit = /\d/;
const regexSpecialChar = /[!@#$%^&*]/;
const regexMinLength = /.{10,}/;

const AuthForm = (props: IAuthFormProps) => {
  const { onAuthFormSubmit, authFormType, onGoogleButtonClick, errorCode } =
    props;

  const [email, setEmail] = useState<TUserEmail>('');
  const [password, setPassword] = useState<TUserPassword>('');
  const { isLoading: loading } = useGetSessionQuery();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [isEmailCompleted, setIsEmailCompleted] = useState(false);
  const [isPasswordCompleted, setIsPasswordCompleted] = useState(false);

  const [passwordChecks, setPasswordChecks] = useState({
    hasLowerCase: false,
    hasUpperCase: false,
    hasDigit: false,
    hasSpecialChar: false,
    minLength: false,
  });

  const checkPassword = (password: string) => {
    setPasswordChecks({
      hasLowerCase: regexLowerCase.test(password),
      hasUpperCase: regexUpperCase.test(password),
      hasDigit: regexDigit.test(password),
      hasSpecialChar: regexSpecialChar.test(password),
      minLength: regexMinLength.test(password),
    });
  };

  const passwordHelperTextStyle = (isValid: boolean) => ({
    color: isValid ? 'green' : 'red',
    transitionDuration: '0.2s',
  });

  useEffect(() => {
    if (Object.values(passwordChecks).every((i) => i !== false)) {
      setIsPasswordCompleted(true);
    } else {
      setIsPasswordCompleted(false);
    }
    setIsEmailCompleted(regexEmail.test(email));
  }, [passwordChecks, email]);

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
          helperText={`* Please enter your Email john@example.com`}
          sx={{
            '& .MuiFormHelperText-root': {
              transitionDuration: '0.2s',
              color: 'red',
              opacity: isEmailCompleted ? 0 : 1,
            },
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={loading}
        />
        <Box position='relative'>
          <TextField
            label='Password'
            type={isPasswordHidden ? 'password' : 'text'}
            variant='outlined'
            fullWidth
            margin='normal'
            value={password}
            helperText={`* Please enter your Password`}
            sx={{
              '& .MuiFormHelperText-root': {
                transitionDuration: '0.2s',
                color: 'red',
                opacity: isPasswordCompleted ? 0 : 1,
              },
            }}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPassword(e.target.value);
            }}
            disabled={loading}
          />
          <IconButton
            color='inherit'
            sx={{
              alignItems: 'end',
              position: 'absolute',
              top: '24px',
              right: '10px',
            }}
            onClick={() => {
              setIsPasswordHidden((prev) => !prev);
            }}
          >
            {isPasswordHidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </Box>
        <Box sx={{ paddingTop: '1rem' }}>
          <Typography
            style={passwordHelperTextStyle(passwordChecks.hasLowerCase)}
          >
            - The password must contain at least one lowercase letter (a-z).
          </Typography>
          <Typography
            style={passwordHelperTextStyle(passwordChecks.hasUpperCase)}
          >
            - The password must contain at least one uppercase letter (A-Z).
          </Typography>
          <Typography style={passwordHelperTextStyle(passwordChecks.hasDigit)}>
            - The password must contain at least one digit (0-9).
          </Typography>
          <Typography
            style={passwordHelperTextStyle(passwordChecks.hasSpecialChar)}
          >
            - The password must contain at least one special character from this
            set: `!@#$%^&*`.
          </Typography>
          <Typography style={passwordHelperTextStyle(passwordChecks.minLength)}>
            - The password must be at least 10 characters long.
          </Typography>
        </Box>

        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{ marginTop: 2 }}
          disabled={loading || !isEmailCompleted || !isPasswordCompleted}
        >
          {loading ? (
            <CircularProgress size={24} color='inherit' />
          ) : authFormType === 'LOG_IN' ? (
            'Sign in'
          ) : (
            'Sign up'
          )}
        </Button>

        {errorCode && (
          <Typography variant='body2' color='error' mt={2} textAlign='center'>
            {handleError(errorCode)}
          </Typography>
        )}

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
