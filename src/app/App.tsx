import Layout from '@layout/Layout';
import Loader from '@UI/MainUI/Loader/Loader';
import { useGetSessionQuery } from '@entities/auth/API/api';
import NotFoundPage from '@pages/main/notFound/NotFoundPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 700,
      lg: 1000,
      xl: 1236,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'stretch',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          transitionDuration: '0.2s',
          '&.Mui-selected': {
            backgroundColor: 'rgba(156, 39, 176, 0.04)',
            borderTop: '#7b1fa2 1px solid', // Легкий розовый фон при selected
            color: '#7b1fa2', // Оставляем цвет текста как есть
            '&:hover': {
              backgroundColor: 'rgba(156, 39, 176, 0.1)', // Чуть более насыщенный розовый при ховере
            },
          },
        },
      },
    },
  },
});

const App = () => {
  const { isLoading, error } = useGetSessionQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
    return <NotFoundPage />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    );
  }
};

export default App;
