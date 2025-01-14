import { Box, Container, Typography } from '@mui/material';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';

const HomePage = () => {
  return (
    <PageWrapper>
      <Container
        component='section'
        maxWidth='sm'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
            p: 2,
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 2,
            backgroundColor: 'grey.100',
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            Welcome to MockEShop!
          </Typography>
          <Typography variant='body1'>
            Your one-stop shop for all things imaginary. Explore our wide range
            of virtual products and services!
          </Typography>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
