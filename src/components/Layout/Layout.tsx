import { Container, keyframes } from '@mui/material';
import RoutesGenerator from '../RoutesGenerator';
import Navbar from './Navbar/Navbar';
import AppBox from '@UI/MainUI/AppBox/AppBox';
import { useEffect, useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Layout = () => {
  // const location = useLocation();
  // const [path, setPath] = useState('');
  // const [_, forceUpdate] = useReducer(x => x + 1, 0)

  // useEffect(() => {
  //   if (location.pathname !== path) {
  //     setPath(location.pathname);
      
  //     const timeout = setTimeout(() => {
  //       forceUpdate()
  //     }, 500)

  //     clearTimeout(timeout)
  //   }
  // }, [location.pathname, path]);

  return (
    <>
      <Navbar />
      <Container
        component='main'
        maxWidth='lg'
        sx={{
          display: 'flex',
          marginTop: '80px',
          paddingInline: {
            xs: '0px',
          },
          // opacity: 0,
          // animation: `${fadeIn} 1s ease-in-out forwards`,
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
    </>
  );
};

export default Layout;
