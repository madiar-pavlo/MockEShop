import { Box, Grid2, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';

export type FeatureDescription = {
  title: string;
  description: string;
};

const featuresDescription: FeatureDescription[] = [
  {
    title: 'Affordable Prices',
    description: 'Competitive prices without compromising quality.',
  },
  {
    title: 'Fast Delivery',
    description: 'Get your orders delivered fast and reliably.',
  },
  {
    title: 'Secure Payments',
    description: 'Your data is safe with us. Shop confidently.',
  },
  {
    title: 'Customer Support',
    description: '24/7 support to assist you whenever you need.',
  },
];

const FeaturesSection = () => {
  return (
    <Box>
      <Typography
        variant='h4'
        sx={{
          mb: 4,
          textAlign: 'center',
          color: '#212121',
          fontSize: {
            xs: '1.5rem', // small screen
            sm: '2rem', // medium screen
            md: '2.5rem', // large screen
          },
        }}
      >
        Why Shop With Us?
      </Typography>
      <Grid2 container spacing={4} justifyContent='center'>
        {featuresDescription.map((featureDescription, index) => (
          <Grid2
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
            key={index}
          >
            <FeatureCard featureDescription={featureDescription} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FeaturesSection;
