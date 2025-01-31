import { Container, Typography, Box } from '@mui/material';
import NoEmailMessage from '@UI/AuthUI/NoEmailMessage';
import { useParams } from 'react-router-dom';

const WaitingEmailConfirmPage = () => {
  const { userEmail } = useParams();
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (userEmail) {
    if (regexEmail.test(userEmail)) {
      return (
        <Container maxWidth='md' sx={{ mt: 4 }}>
          <Box>
            <Typography variant='h4' gutterBottom>
              Please Confirm Your Email
            </Typography>
            <Typography variant='body1' gutterBottom>
              We have sent a confirmation email to <strong>{userEmail}</strong>.
              Please follow the link in the email to confirm your email address.
            </Typography>
            <Typography variant='body2' color='textSecondary' gutterBottom>
              If you didn't receive the email, please check your spam folder.
            </Typography>
          </Box>
        </Container>
      );
    }
    return <NoEmailMessage />;
  }
  return <NoEmailMessage />;
};

export default WaitingEmailConfirmPage;
