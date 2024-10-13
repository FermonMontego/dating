import {
  Box,
  Button,
  Center,
  Divider,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { http } from '../../../http/http';
import { Form, Link } from 'react-router-dom';
import AuthFormWidget from 'src/widgets/AuthFormWidget/AuthFormWidget';

const Autorization = () => {
  const { handleSubmit, register } = useForm({
    mode: 'onBlur',
  });

  const submitForm = useCallback(async (data: any) => {
    await http
      .post('/auth', {
        name: 'Gosha',
        surname: 'Rubchinsky',
        age: 40,
        city: 'st. Petersburg',
        address: {
          street: 'Улица солевая',
          home: '99',
        },
      })
      .then(response => {
        console.log(response, 'response');
      });
  }, []);

  const handleSubmitError = useCallback((error: Error): void => {
    console.log(error);
  }, []);

  return <AuthFormWidget />;
};

export default Autorization;
