import { Container, Typography, Box, Link } from '@mui/material';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{ fontSize: '6rem', fontWeight: 'bold' }}
          >
            404
          </Typography>
          <Typography variant='h6' align='center' sx={{ marginBottom: 2 }}>
            Oops! The page you are looking for does not exist.
          </Typography>
          <Link component={RouterLink} to='/' color='primary'>
            Go to Home
          </Link>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default NotFoundPage;
