import React, { FC, PropsWithChildren, useCallback } from 'react';
import BaseForm from 'src/components/Forms/BaseForm/BaseForm';

import { useForm } from 'react-hook-form';
import { Button, Center, Input, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {} & PropsWithChildren;

const AuthFormWidget: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm({
    mode: 'onBlur',
  });

  const submitAuthForm = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <BaseForm onSubmitForm={handleSubmit(submitAuthForm)} titleForm={'Войти'}>
      <Stack gap={4}>
        <Stack>
          <Text fontSize={14}>Логин или E-mail</Text>
          <Input
            {...register('login_or_email')}
            placeholder="Введите ваш логин или E-mail"
          />
        </Stack>
        <Stack>
          <Text fontSize={14}>Пароль</Text>
          <Input {...register('password')} placeholder="********" />
        </Stack>
        <Stack>
          <Center>
            <Link to={'/reset-password'}>Забыли пароль?</Link>
          </Center>
        </Stack>
      </Stack>

      <Stack mt={8} gap={4}>
        <Button onClick={() => navigate('/registration')}>
          Нет аккаунта? Регистрация
        </Button>
        <Button type={'submit'}>Войти</Button>
      </Stack>
    </BaseForm>
  );
};

export default AuthFormWidget;
