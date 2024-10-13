import { Input, Stack, Text } from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';

import * as classes from './classes.module.scss';

import { Controller } from 'react-hook-form';
import ToggleShowPassword from 'src/components/UI/ToggleShowPassword/ToggleShowPassword';

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
            <label className={classes.labelPasswordInput}>
              <Input
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type="password"
              />

              <ToggleShowPassword
                className={classes.labelPasswordInput__passwordShow}
              />
            </label>
          </Stack>
        );
      }}
    />
  );
};

export default PasswordHookForm;
