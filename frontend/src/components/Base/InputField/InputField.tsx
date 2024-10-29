import { Input, Stack, Text } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

import * as classes from './classes.module.scss';

type Props = {
  control: any;
  placeholder?: string;
  name?: string;
  label?: string | ReactElement;
};

const InputField: FC<Props> = ({
  control,
  placeholder,
  name = 'default',
  label,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <Stack className={classes.wrapperInputField}>
            <Text fontSize={14}>{label}</Text>
            <Input
              placeholder={placeholder}
              name={field.name}
              ref={field.ref}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              className={
                fieldState.invalid
                  ? classes.wrapperInputField__errorFieldBorder
                  : ''
              }
            />
            <p className={classes.wrapperInputField__errorFieldMessage}>
              {fieldState.error?.message}
            </p>
          </Stack>
        );
      }}
    />
  );
};

export default InputField;
