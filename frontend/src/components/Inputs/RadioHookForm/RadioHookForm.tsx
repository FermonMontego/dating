import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { IRadioOption } from 'src/constants/options/options';

type Props = {
  name: string;
  control: any;
  options: IRadioOption[];
};

const RadioHookForm: FC<Props> = ({ name, control, options }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <RadioGroup
            name={field.name}
            onBlur={field.onBlur}
            value={field.value}
            onChange={field.onChange}
          >
            <Stack direction="row" flexWrap={'wrap'}>
              {options &&
                options.map(({ label, value }) => (
                  <Radio key={value} value={value}>
                    {label}
                  </Radio>
                ))}
            </Stack>
          </RadioGroup>
        );
      }}
    />
  );
};

export default RadioHookForm;
