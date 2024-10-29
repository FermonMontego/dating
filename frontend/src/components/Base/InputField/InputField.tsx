import { Input, Stack, Text } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

import classes from './classes.module.scss';

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
    <Stack>
      <Text fontSize={14}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Input
              placeholder={placeholder}
              name={field.name}
              ref={field.ref}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
          );
        }}
      />
    </Stack>
  );
};

export default InputField;
