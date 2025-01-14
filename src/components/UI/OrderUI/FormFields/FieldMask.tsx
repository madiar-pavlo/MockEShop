import { TSetState } from '@appTypes/react';
import {
  OrderContext,
  OrderContextInterface,
} from '@entities/orders/interface/context/orderContext';
import { Box, TextField, Typography } from '@mui/material';
import { useAppContext } from '@utils/global-hooks/useAppContext';
import { ChangeEvent, useEffect, useState } from 'react';

const FieldMask = ({
  field,
  setField,
  setIsFieldCompleted,
  isFieldCompleted,
  fieldOptions,
}: {
  isFieldCompleted: boolean;
  setIsFieldCompleted: TSetState<boolean>;
  field: string;
  setField: TSetState<string>;
  fieldOptions: {
    label: string;
    name: string;
    dividingSign: string;
    maxValueLength: number;
    divisionLength: number;
  };
}) => {
  const { setFormData } = useAppContext<OrderContextInterface>(OrderContext);
  const { maxValueLength, dividingSign, divisionLength, label, name } =
    fieldOptions;
  const [isFieldFocused, setIsFieldFocused] = useState(false);
  const [fieldMask, setFieldMask] = useState(Array(maxValueLength).fill('0'));

  const regex = new RegExp(`(\\d{${divisionLength}})(?=\\d)`, 'g');

  const divider = `$1${dividingSign}`;

  useEffect(() => {
    if (isFieldCompleted) {
      setFormData((prev) => ({
        ...prev,
        [name]: field,
      }));
    } else if (!isFieldCompleted) {
      setFormData((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  }, [isFieldCompleted]);
  const onFieldChange = (
    element: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = element.target.value
      .replace(/\D/g, '')
      .split(dividingSign)
      .join('');
    if (value.length <= maxValueLength) {
      setField(value.replace(regex, divider));
      setFieldMask((prevValue) =>
        prevValue.map((item, index) => {
          if (index === value.length - 1) {
            return value[value.length - 1];
          } else {
            return item;
          }
        })
      );
    }
    if (value.length >= maxValueLength) {
      setIsFieldCompleted(true);
    } else {
      setIsFieldCompleted(false);
    }
  };

  return (
    <Box position='relative'>
      <Typography
        color='#A2A2A2'
        sx={{
          transitionDuration: '0.25s',
          position: 'absolute',
          top: '31.9px',
          left: '14.5px',
          opacity: isFieldFocused ? '1' : '0',
        }}
      >
        {fieldMask.join('').replace(regex, divider)}
      </Typography>
      <TextField
        onFocus={() => setIsFieldFocused(true)}
        onBlur={() => setIsFieldFocused(false)}
        onChange={onFieldChange}
        label={label}
        name={name}
        value={field}
        fullWidth
        margin='normal'
        helperText={`* Please enter your ${label}`}
        sx={{
          '& .MuiFormHelperText-root': {
            transitionDuration: '0.2s',
            color: 'red',
            opacity: isFieldCompleted ? 0 : 1,
          },
        }}
      />
    </Box>
  );
};

export default FieldMask;
