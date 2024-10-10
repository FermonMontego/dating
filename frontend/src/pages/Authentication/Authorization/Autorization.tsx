import {
  Box,
  Button,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { http } from '../../../http/http';
import { Form } from 'react-router-dom';

const Autorization = () => {

  const { handleSubmit, register } = useForm({
    mode: 'onBlur'
  });

  const submitForm = useCallback(async (data: any) => {
    await http.post('/auth', {
      name: 'Gosha',
      surname: 'Rubchinsky',
      age: 40,
      city: 'st. Petersburg',
      address: {
        street: 'Улица солевая',
        home: '99'
      }
    }).then(response => {
      console.log(response, 'response');
    })
  }, []);

  const handleSubmitError = useCallback((error: Error): void => {
    console.log(error)
  }, [])

  return (
    <Box
      border={'1px solid var(--chakra-colors-chakra-border-color)'}
      p={8}
      borderRadius={'16px'}
      maxW={440}
      margin={'50px auto 0px'}
    >
      <Form onSubmit={handleSubmit(submitForm, handleSubmitError)}>
        <Text fontSize={'18px'} fontWeight={600} textAlign={'center'}>Регистрация</Text>

        <Stack gap={4}>
          <Stack>
            <Text>Ваше имя</Text>
            <Input {...register('firstName')} placeholder='Введите имя' />
          </Stack>
          <Stack>
            <Text>Ваша фамилия</Text>
            <Input {...register('lastName')} placeholder='Введите фамилию' />
          </Stack>
          <Stack>
            <Text>Ваш возраст</Text>
            <Input {...register('age')} placeholder='Введите ваш возраст' type='date' />
          </Stack>
        </Stack>

        <Button mt={8} type={'submit'}>Зарегистрироваться</Button>
      </Form>
    </Box>
  );
};

export default Autorization;
