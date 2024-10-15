import React, { FC, useCallback, useEffect } from 'react';
import BaseForm from 'src/components/Forms/BaseForm/BaseForm';

import { useForm } from 'react-hook-form';

import {
  Button,
  Divider,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import RadioHookForm from 'src/components/Inputs/RadioHookForm/RadioHookForm';
import { genderOptions } from 'src/constants/options/options';
import { useNavigate } from 'react-router-dom';
import PasswordHookForm from 'src/components/Inputs/PasswordHookForm/PasswordHookForm';
import { http } from 'src/http/http';

type Props = {};

const RegistrationFormWidget: FC<Props> = ({}) => {
  const navigate = useNavigate();

  const toast = useToast({
    position: 'bottom-right',
  });

  const {
    handleSubmit,
    register,
    control,
    setError,
    formState: { errors: formErrors },
  } = useForm({
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

  const submitRegistrationForm = useCallback(async (data: any) => {
    await http
      .post('/registration', {
        ...data,
      })
      .then(response => {
        if (response?.errors) {
          const errors = response?.errors.reduce((acc, error) => {
            acc.push({
              message: error.msg,
              field: error.path,
            });

            return acc;
          }, []);

          errors.forEach(error => {
            setError(`${error.field}`, { message: error.message });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(formErrors, 123);
  }, [setError, formErrors]);

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
          {formErrors?.login?.message && (
            <Text fontSize={12} color={'tomato'}>
              {formErrors.login.message}
            </Text>
          )}
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
