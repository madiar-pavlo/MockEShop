import {
  FormDataType,
  OrderContext,
  OrderContextInterface,
} from '@entities/orders/interface/context/orderContext';
import { TextField, TextFieldProps } from '@mui/material';
import { useAppContext } from '@utils/global-hooks/useAppContext';

const FieldWrapper = ({
  label,
  name,
  ...props
}: {
  label: string;
  name: keyof FormDataType;
} & TextFieldProps) => {
  const { formData, handleChange } =
    useAppContext<OrderContextInterface>(OrderContext);
  return (
    <TextField
      label={label}
      name={name}
      value={formData[name]}
      helperText={`* Please enter your ${label}`}
      onChange={handleChange}
      fullWidth
      margin='normal'
      sx={{
        '& .MuiFormHelperText-root': {
          transitionDuration: '0.2s',
          color: 'red',
          opacity: formData[name] ? 0 : 1,
        },
      }}
      {...props}
    />
  );
};

export default FieldWrapper;
