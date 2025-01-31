import AuthForm from '@UI/AuthUI/AuthForm';
import { useRegisterMutation } from './API/api';
import Loader from '@UI/MainUI/Loader/Loader';
import { useAppDispatch } from '@app/store';
import { googleLogin } from './model/loginUser';
import { TUserEmail, TUserPassword } from './auth.types';
import { registerUser } from './model/registerUser';

const Register = () => {
  const dispatch = useAppDispatch();
  const [register, { data,isLoading, error }] = useRegisterMutation();

  const onSignUpFormSubmit = (email: TUserEmail, password: TUserPassword) => {
    dispatch(registerUser(register, { email, password }));
  };
  const onGoogleButtonClick = () => {
    dispatch(googleLogin());
  };
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log('eaefas: ', error);
  }

  console.log('DATA', data)
  return (
    <AuthForm
      onGoogleButtonClick={onGoogleButtonClick}
      onAuthFormSubmit={onSignUpFormSubmit}
      authFormType='SIGN_UP'
      errorCode={error as string}
    />
  );
};

export default Register;
