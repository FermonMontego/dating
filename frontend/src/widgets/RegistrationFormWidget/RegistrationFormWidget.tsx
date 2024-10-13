import React, { FC, useCallback } from 'react';
import BaseForm from 'src/components/Forms/BaseForm/BaseForm';

import { useForm } from 'react-hook-form';

import { Button, Divider, Input, Stack, Text } from '@chakra-ui/react';
import RadioHookForm from 'src/components/Inputs/RadioHookForm/RadioHookForm';
import { genderOptions } from 'src/constants/options/options';
import { useNavigate } from 'react-router-dom';
import PasswordHookForm from 'src/components/Inputs/PasswordHookForm/PasswordHookForm';

type Props = {};

const RegistrationFormWidget: FC<Props> = ({}) => {
  const navigate = useNavigate();

  const submitRegistrationForm = useCallback((data: any) => {
    console.log(data);
  }, []);

  const { handleSubmit, register, control } = useForm({
    mode: 'onBlur',
    defaultValues: {
      gender: 'male',
      password: '',
      password_confirm: '',
      login: '',
      firstName: '',
      lastName: '',
    },
  });
  return (
    <BaseForm onSubmitForm={handleSubmit(submitRegistrationForm)}>
      <Text fontSize={'21px'} fontWeight={600} textAlign={'center'}>
        Регистрация
      </Text>

      <Divider mt={4} mb={4} />

      <Stack gap={4}>
        <Stack>
          <Text fontSize={14}>Придумайте логин</Text>
          <Input {...register('login')} placeholder={'Логин (латиница)'} />
        </Stack>
        <Stack>
          <Text fontSize={14}>Ваше имя</Text>
          <Input {...register('firstName')} placeholder={'Введите имя'} />
        </Stack>
        <Stack>
          <Text fontSize={14}>Ваша фамилия</Text>
          <Input {...register('lastName')} placeholder={'Введите фамилию'} />
        </Stack>
        <Stack>
          <Text fontSize={14}>Дата рождения</Text>
          <Input
            {...register('birthday')}
            placeholder={'Введите дату рождения'}
            type="date"
          />
        </Stack>
        <Stack>
          <RadioHookForm
            name="gender"
            control={control}
            options={genderOptions}
          />
        </Stack>

        <PasswordHookForm
          control={control}
          name={'password'}
          label="Пароль"
          placeholder="Придумайте пароль"
        />

        <PasswordHookForm
          control={control}
          name={'password_confirm'}
          label="Повторите пароль"
          placeholder="Повторите пароль"
        />

        <Stack mt={4}>
          <Button onClick={() => navigate('/')}>Уже есть аккаунт?</Button>
          <Button type="submit">Регистрация</Button>
        </Stack>
      </Stack>
    </BaseForm>
  );
};

export default RegistrationFormWidget;
