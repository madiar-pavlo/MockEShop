import { Container, Typography, Box } from '@mui/material';
import StyledLink from '@UI/MainUI/NavigationUI/StyledLink';

import { Link as RouterLink } from 'react-router-dom';

const NoEmailMessage = () => {

  return (
    <Container maxWidth='md' sx={{ mt: 4 }}>
      <Box>
        <Typography variant='h4' gutterBottom>
          What are you doing here?
        </Typography>
        <Typography variant='body1' gutterBottom>
          There is no email in the URL. Please leave this page and go somewhere
          useful.
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between ' }}>
          <Typography variant='body2' color='textSecondary' gutterBottom>
            If you keep being lost, you might as well go home.
          </Typography>
          <StyledLink component={RouterLink} to='/'>
            Go Home
          </StyledLink>
        </Box>
      </Box>
    </Container>
  );
};

export default NoEmailMessage;
