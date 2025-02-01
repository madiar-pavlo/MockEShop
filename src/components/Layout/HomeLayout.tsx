import { Box, Divider } from '@mui/material';
import HeroSection from '@UI/HomeUI/HeroSection/HeroSection';
import PreviewProducts from '@entities/products/interface/products/previewProducts';
import FeaturesSection from '@UI/HomeUI/FeaturesSection/FeaturesSection';

const HomeLayout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',

        maxWidth: '100vw',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9',
      }}
    >
      <HeroSection />
      <Box sx={{ padding: {
        xs: 3,
        sm: 6
      }, marginTop: '100vh' }}>
        <PreviewProducts />

        <Divider sx={{ my: 6 }} />
        <FeaturesSection />
      </Box>
    </Box>
  );
};

export default HomeLayout;
