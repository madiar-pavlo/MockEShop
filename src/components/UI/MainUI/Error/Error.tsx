import { Box, Typography, Button } from '@mui/material';

interface ErrorProps {
  message: string;
  description: string;
  onButtonClick: () => void;
}
// Error Component
const Error = ({ message, description, onButtonClick }: ErrorProps) => {
  return (
    <Box textAlign='center'>
      {/* Running Text */}
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#ff4d4d',
          marginBottom: 2,
          animation: 'runningText 10s linear infinite',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            animation: 'move 10s linear infinite',
          }}
        >
          {message}
        </span>
      </Typography>

      {/* Description */}
      <Typography sx={{ marginBottom: 3, color: '#666' }}>
        {description}
      </Typography>

      {/* Button */}
      <Button
        variant='contained'
        color='error'
        onClick={onButtonClick}
        sx={{
          padding: '12px 24px',
          fontSize: '1rem',
        }}
      >
        Go back Home
      </Button>
    </Box>
  );
};
export default Error