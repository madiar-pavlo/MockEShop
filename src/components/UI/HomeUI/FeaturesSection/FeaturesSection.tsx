import { Box, Grid2, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';

export type FeatureDescription = {
  title: string;
  description: string;
};

const featuresDescription: FeatureDescription[] = [
  {
    title: 'Mock Shopping Experience',
    description:
      'Explore a fully functional mock store with no real transactions. Perfect for testing and learning!',
  },
  {
    title: 'Email & OAuth Login',
    description:
      'Sign up with your email or Google account to save your mock purchase history.',
  },
  {
    title: 'Wide Range of Mock Products',
    description:
      'Browse through mock clothing, bags, and even snowboards. It’s all virtual, but fun!',
  },
  {
    title: 'Mock Order History',
    description:
      'Track your mock purchases and see what you’ve “bought” in the past.',
  },
  {
    title: 'Interactive Features',
    description:
      'Add items to your cart, apply filters, and enjoy a seamless mock shopping experience.',
  },
  {
    title: 'No Real Payments',
    description:
      'Shop worry-free—no real money is involved. It’s all just for fun and practice!',
  },
];

const FeaturesSection = () => {
  return (
    <Box component={'section'}>
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
      <Box display='flex' justifyContent='center' flexWrap={'wrap'} gap={5}>
        {featuresDescription.map((featureDescription, index) => (
          <FeatureCard key={index} featureDescription={featureDescription} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSection;
