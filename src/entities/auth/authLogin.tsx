import AuthForm from '@UI/AuthUI/AuthForm';
import { useLoginMutation } from './API/api';
import { CircularProgress } from '@mui/material';
import { googleLogin, loginUser } from './model/loginUser';
import { useAppDispatch } from '@app/store';
import { TUserEmail, TUserPassword } from './auth.types';

const AuthLogin = () => {
  const dispatch = useAppDispatch();
  const [_, { isLoading }] = useLoginMutation();

  const onSignInFormSubmit = (email: TUserEmail, password: TUserPassword) => {
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };
  const onGoogleButtonClick = () => {
    dispatch(googleLogin());
  };
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <AuthForm
      onAuthFormSubmit={onSignInFormSubmit}
      authFormType='LOG_IN'
      onGoogleButtonClick={onGoogleButtonClick}
    />
  );
};

export default AuthLogin;
