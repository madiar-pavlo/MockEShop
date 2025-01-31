import { Card, Typography } from '@mui/material';
import { FeatureDescription } from './FeaturesSection';

const FeatureCard = ({
  featureDescription,
}: {
  featureDescription: FeatureDescription;
}) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 2,
        padding: 3,
        maxHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        minHeight: '300px',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          color: '#1976d2',
          fontWeight: 600,
          fontSize: {
            xs: '1.125rem',
            sm: '1.25rem',
            md: '1.5rem',
          },
          mb: 1,
        }}
      >
        {featureDescription.title}
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        sx={{
          fontSize: {
            xs: '0.875rem',
            sm: '1rem',
            md: '1.125rem',
          },
          lineHeight: 1.6,
        }}
      >
        {featureDescription.description}
      </Typography>
    </Card>
  );
};

export default FeatureCard;
