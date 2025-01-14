import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const GoBack = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      flexGrow={1}
    >
      <Typography variant='h5' gutterBottom>
        You are already logged in. 🚀
      </Typography>
      <Typography variant='body1' gutterBottom>
        There's nothing for you to do here.
      </Typography>
      <Link
        component={RouterLink}
        color='primary'
        to='/'
        sx={{ mt: 2 }}
      >
        Go to Homepage
      </Link>
    </Box>
  );
};

export default GoBack;
