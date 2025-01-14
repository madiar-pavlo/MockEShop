import { Link, LinkProps, styled } from '@mui/material';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

const StyledLink = styled(Link)<LinkProps | RouterLinkProps>(() => ({
  display: 'inline-flex', // То же, что и у Button
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 16px', // Padding как у Button
  borderRadius: '4px', // Радиус углов как у Button
  textTransform: 'uppercase', // Стилизация текста как у Button
  fontWeight: 500, // Чуть жирнее, как в Button
  textDecoration: 'none', // Убираем подчеркивание
  backgroundColor: 'transparent', // Прозрачный фон
  boxShadow: 'none', // Без теней
  transition: 'all 0.3s', // Плавный переход при наведении
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.09)', // Эффект при наведении
    color: 'primary.main', // Цвет текста при наведении
  },
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Эффект при нажатии
  },
  '&:focus': {
    outline: 'none', // Убираем контур при фокусе
  },
}));

export default StyledLink;
