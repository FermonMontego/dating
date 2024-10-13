import { Input, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Controller } from 'react-hook-form';

type Props = {
  control: any;
  name?: string;
  label?: string;
  placeholder?: string;
};

const PasswordHookForm: FC<Props> = ({
  control,
  name = 'password_default',
  label,
  placeholder = 'Введите пароль',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => {
        return (
          <Stack>
            {label && <Text fontSize={14}>{label}</Text>}
            <Input
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type="password"
            />
          </Stack>
        );
      }}
    />
  );
};

export default PasswordHookForm;
