import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import { ReactNode } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{ 
        width: '100%',
        display: 'flex',
        opacity: 0,
        animation: `${fadeIn} 0.5s ease-in-out forwards`,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
