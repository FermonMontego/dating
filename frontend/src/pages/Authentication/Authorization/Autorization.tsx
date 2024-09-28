import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useCallback, useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { http } from '../../../http/http';

const Autorization = () => {
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

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <Box
      border={'1px solid var(--chakra-colors-chakra-border-color)'}
      p={8}
      borderRadius={'16px'}
      maxW={440}
      margin={'50px auto 0px'}
    >
      <Formik initialValues={{}} onSubmit={submitForm}>
        {propsFormik => (
          <Form>
            <Flex flexDirection={'column'} gap={4}>
              <Center>
                <Heading as={'h3'} size={'lg'}>
                  Войти!!!
                </Heading>
              </Center>

              <Field name="first_name">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel fontSize={14}>Логин</FormLabel>
                    <Input size={'lg'} {...field} placeholder="Введите логин" />
                  </FormControl>
                )}
              </Field>

              <Field name="last_name">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel fontSize={14}>Пароль</FormLabel>
                    <Input
                      size={'lg'}
                      type="password"
                      {...field}
                      placeholder="Введите пароль"
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="remember">
                {({ field, form }) => (
                  <FormControl>
                    <Checkbox colorScheme="teal" size="lg" {...field}>
                      <Text fontSize={14}>Запомнить меня</Text>
                    </Checkbox>
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Flex direction="row" gap={2} mt={8}>
              <Button
                as={RouterLink}
                to={'/registration'}
                colorScheme="teal"
                isLoading={propsFormik.isSubmitting}
                type="submit"
                variant={'outline'}
              >
                Регистрация
              </Button>
              <Spacer />
              <Button
                colorScheme="teal"
                isLoading={propsFormik.isSubmitting}
                type="submit"
              >
                Войти
              </Button>
            </Flex>

            <Center mt={8}>
              <RouterLink to={'/reset-password'}>Забыли пароль?</RouterLink>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Autorization;
