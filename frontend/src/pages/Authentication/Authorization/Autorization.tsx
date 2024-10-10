import {
  Box,
  Button,
  Input,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { http } from '../../../http/http';
import { Form } from 'react-router-dom';

const Autorization = () => {

  const { handleSubmit, register } = useForm({
    mode: 'onBlur'
  });

  const submitForm = useCallback(async (values, actions) => {
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

    setTimeout(() => actions.setSubmitting(false), 3000);
  }, []);

  const handleSubmitError = useCallback((error: Error) => {
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
        <Input {...register('test')} />
        <Button type={'submit'}>Зарегистрироваться</Button>
      </Form>
    </Box>
  );
};

export default Autorization;
