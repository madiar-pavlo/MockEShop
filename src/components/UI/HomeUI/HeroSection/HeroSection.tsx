import { Box, Button } from '@mui/material';

import image from '@media/HomePageBackground.jpg';
import RepresentingText from './RepresentingText';

const HeroSection = () => {
  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        height: '100vh',
        maxWidth: '100vw',
        display: 'flex',
        position: 'absolute',
        marginTop: '50px',
        left: 0,
        top: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        px: 3,
        py: 5,
      }}
    >
      <RepresentingText />
      <Button
        variant='contained'
        size='large'
        color='primary'
        sx={{
          boxShadow: 6,
          px: 4,
          py: 2,
          fontSize: '1.1rem',
        }}
      >
        Start Shopping
      </Button>
    </Box>
  );
};

export default HeroSection;
