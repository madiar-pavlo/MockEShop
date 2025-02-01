import { Box, Typography } from '@mui/material';
import TextWithBackground from '../TextWithBackground/TextWithBackground';

const HEADER_TEXT = 'Welcome to MockEShop';

const DESCRIPTION_TEXT2 =
  'Explore our mock store and discover a variety of clothing, bags, and even snowboards! Convenient, fast, and secure mock shopping all in one place.';

const DESCRIPTION_TEXT3 =
  'MockEShop is a demo platform where you can browse and "purchase" items like trendy clothes, stylish bags, and even snowboards (just for fun!). Sign up with your email or OAuth to save your purchase history and enjoy a seamless mock shopping experience. Join us today and experience the future of online shopping—mock style!';
const RepresentingText = () => {
  return (
    <Box>
      <Typography
        variant='h2'
        sx={{
          mb: 3,
          fontSize: {
            xs: '2rem',
            sm: '2.8rem',
            md: '4rem',
          },
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          lineHeight: '1.2',
          textTransform: 'uppercase',
        }}
      >
        <TextWithBackground text={HEADER_TEXT} />
      </Typography>
      <Typography
        variant='h5'
        sx={{
          mb: 4,
          fontSize: {
            xs: '1rem',
            sm: '1.125rem',
            md: '1.375rem',
          },
          fontWeight: 300,
          maxWidth: '650px',
          lineHeight: '1.6',
        }}
      >
        <TextWithBackground background='#0072D2' text={DESCRIPTION_TEXT2} />
      </Typography>
      <Typography
        variant='body1'
        sx={{
          mb: 6,
          fontSize: {
            xs: '0.875rem',
            sm: '1rem',
            md: '1.125rem',
          },
          fontWeight: 400,
          maxWidth: '700px',
          lineHeight: '1.7',
        }}
      >
        <TextWithBackground background='#0072D2' text={DESCRIPTION_TEXT3} />
      </Typography>
    </Box>
  );
};

export default RepresentingText;
