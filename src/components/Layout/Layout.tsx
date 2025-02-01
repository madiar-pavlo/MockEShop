import { Container } from '@mui/material';
import RoutesGenerator from '../RoutesGenerator';
import Navbar from './Navbar/Navbar';
import AppBox from '@UI/MainUI/AppBox/AppBox';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container
        component='main'
        maxWidth='lg'
        sx={{
          display: 'flex',
          marginTop: '80px',
          minHeight: '83vh',
          paddingInline: {
            xs: '0px',
          },
        }}
      >
        <AppBox
          sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
          }}
          className='APAFAFAF'
        >
          <RoutesGenerator />
        </AppBox>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
