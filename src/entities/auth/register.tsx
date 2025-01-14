import AuthForm from '@UI/AuthUI/AuthForm';
import { useRegisterMutation } from './API/api';
import Loader from '@UI/MainUI/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/store';
import { googleLogin } from './model/loginUser';
import { TUserEmail, TUserPassword } from './auth.types';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const onSignUpFormSubmit = (email: TUserEmail, password: TUserPassword) => {
    register({ email, password });
    navigate('/auth/login');
  };
  const onGoogleButtonClick = () => {
    dispatch(googleLogin());
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <AuthForm
      onGoogleButtonClick={onGoogleButtonClick}
      onAuthFormSubmit={onSignUpFormSubmit}
      authFormType='SIGN_UP'
    />
  );
};

export default Register;
