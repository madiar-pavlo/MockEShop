import { Box } from "@mui/material";
import Error from "@UI/MainUI/Error/Error";
import { useNavigate } from "react-router-dom";

// ErrorPage Component
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Error
        message='ERROR! SOMETHING WENT WRONG...'
        description="We can't find this page. Try reloading the page or go back to the home page."
        onButtonClick={handleButtonClick}
      />

      <style>
        {`
          @keyframes runningText {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes move {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ErrorPage;
