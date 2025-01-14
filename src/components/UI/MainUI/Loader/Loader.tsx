import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};
export default Loader;
