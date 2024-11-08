import { Input, Stack, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';

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
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur, ref } }) => {
        return (
          <Stack>
            {label && <Text fontSize={14}>{label}</Text>}
            <label className={classes.labelPasswordInput}>
              <Input
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                value={value}
                type={isShowPassword ? 'text' : 'password'}
              />
              <ToggleShowPassword
                isShow={isShowPassword}
                setState={setIsShowPassword}
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
