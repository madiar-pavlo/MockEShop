import Register from '@entities/auth/register';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import PageWrapper from '@UI/MainUI/PageWrapper/PageWrapper';

const RegisterPage = () => {
  return (
    <PageWrapper>
      <Box
        component='section'
        sx={{
          width: '100%',
          minHeight: 'calc(100vh - 90px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          paddingInline: {
            xs: 0,
            md: 2,
          },
        }}
      >
        <Container
          component='div'
          sx={{
            maxWidth: '900px !important',
            paddingInline: {
              xs: 0,
              sm: 3,
            },
          }}
        >
          <Paper elevation={10}>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                paddingBlock: 3,
                paddingInline: {
                  xs: 0,
                  md: 3,
                },
                gap: 3,
                boxShadow: 4,
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant='h4'
                  component='h1'
                  gutterBottom
                  sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                  Welcome to MockEShop
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ marginBottom: 2, color: 'text.secondary' }}
                >
                  Join our mock store to explore a wide range of virtual
                  products, from trendy clothes to stylish bags and even
                  snowboards. Signing up is quick and easy!
                </Typography>
                <Typography
                  variant='h5'
                  component='h2'
                  sx={{
                    marginTop: 3,
                    marginBottom: 1,
                    fontWeight: 'bold',
                    color: 'primary.dark',
                  }}
                >
                  Why Join MockEShop?
                </Typography>
                <List>
                  <ListItem sx={{ padding: 0, marginBottom: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      ✅ Explore a variety of mock products in a risk-free
                      environment.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ padding: 0, marginBottom: 1 }}>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      ✅ Save your mock purchase history and track your
                      "orders."
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ padding: 0 }}>
                    <Typography
                      variant='body2'
                      sx={{ color: 'text.secondary' }}
                    >
                      ✅ Enjoy a seamless and fun mock shopping experience.
                    </Typography>
                  </ListItem>
                </List>
                <Box
                  sx={{
                    maxWidth: '400px',
                    marginInline: 'auto',
                    marginBlock: '40px',
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 700, color: '#d32f2f', mb: 3 }}
                  >
                    🚨 Please Register with Google Login 🚨
                  </Typography>
                  <Typography variant='body1' sx={{ mb: 2, color: '#555' }}>
                    We're currently facing some delays with email confirmation.
                    It might take up to an hour for the confirmation email to
                    arrive.
                  </Typography>
                  <Typography variant='body1' sx={{ mb: 4, color: '#555' }}>
                    In the meantime, please use <strong>Google Login</strong> to
                    proceed quickly and avoid waiting.
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#d32f2f', mb: 5 }}>
                    ❗ Don't want to wait? Google Login is your best option! ❗
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  color: 'primary.dark',
                }}
              >
                <Register />
              </CardActions>
            </Card>
          </Paper>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default RegisterPage;
