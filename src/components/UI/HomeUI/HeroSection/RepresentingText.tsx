import { Box, Typography } from '@mui/material';
import TextWithBackground from '../TextWithBackground/TextWithBackground';

const HEADER_TEXT = 'Welcome to MockEShop';

const DESCRIPTION_TEXT2 =
  'Discover the best deals on your favorite products. Convenient, fast, and secure shopping all in one place.';
const DESCRIPTION_TEXT3 =
  'From electronics to fashion, our platform offers a wide range of products at unbeatable prices. Shop now and enjoy exclusive offers, fast delivery, and top-notch customer service. Join us today!';

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
