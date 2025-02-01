import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#212121',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        fontSize: {
          xs: '0.875rem', // small screen
          sm: '1rem', // medium screen
          md: '1.125rem', // large screen
        },
      }}
    >
      <Typography variant='body2'>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
