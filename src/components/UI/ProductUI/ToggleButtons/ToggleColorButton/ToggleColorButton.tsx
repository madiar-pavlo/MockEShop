import { ToggleButton, ToggleButtonProps } from '@mui/material';
import { ProductVariant } from '@services/Supabase/supabase.types';

interface ToggleColorButtonProps
  extends Omit<ToggleButtonProps, 'value' | 'color'> {
  color: string;
  variant: ProductVariant;
}

const ToggleColorButton = ({
  color,
  variant,
  ...props
}: ToggleColorButtonProps) => {
  return (
    <ToggleButton
      {...props}
      value={variant.color || ''}
      sx={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: color,
        border: '2px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&.Mui-selected': {
          backgroundColor: color,
          borderColor: '#000',
          transform: 'scale(1.1)',

          '&:hover': {
            backgroundColor: color,
            filter: 'brightness(1.4)',
          },
        },
        '&:hover': {
          backgroundColor: color,
          filter: 'brightness(1.4)',
        },
        '&.Mui-disabled': {
          pointerEvents: 'all',
          borderColor: '#ddd',
          opacity: 0.5,
          cursor: 'not-allowed',
          '&:hover': {
            filter: 'none',
          },
          '&::after': {
            content: '""', // Пустой псевдоэлемент
            position: 'absolute',
            top: '50%', // Центрируем линию
            left: '10%', // Оставляем небольшой отступ
            right: '10%', // Оставляем небольшой отступ
            height: '2px', // Толщина линии
            backgroundColor: '#000', // Цвет линии
            transform: 'translateY(-50%) rotate(-45deg)', // Поворот линии
            pointerEvents: 'none', // Чтобы линия не мешала взаимодействию
          },
        },
      }}
    />
  );
};

export default ToggleColorButton;
