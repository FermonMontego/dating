import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useCallback } from 'react';

import { Link as RouterLink } from 'react-router-dom';

const Registration = () => {
  const submitRegistration = useCallback((values, actions) => {
    console.log(values, actions);
  }, []);

  const subm = useCallback(value => value);

  return (
    <Box
      border={'1px solid var(--chakra-colors-chakra-border-color)'}
      p={8}
      borderRadius={'16px'}
      maxW={440}
      margin={'50px auto 0px'}
    >
      <Formik
        initialValues={{
          login: '',
          first_name: '',
          last_name: '',
          gender: 'male',
          years_old: '',
        }}
        onSubmit={submitRegistration}
      >
        {propsFormik => {
          return (
            <Form>
              <Flex gap={8} flexDirection={'column'}>
                <Center>
                  <Heading as={'h3'} size={'lg'}>
                    Регистрация
                  </Heading>
                </Center>

                <Field name="login">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Придумайте логин</FormLabel>
                        <Input
                          {...field}
                          type="text"
                          size={'lg'}
                          placeholder="Придумайте логин"
                        />
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="first_name">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Ваше имя</FormLabel>
                        <Input
                          {...field}
                          type="text"
                          size={'lg'}
                          placeholder="Ваше имя"
                        />
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="last_name">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Фамилия</FormLabel>
                        <Input
                          {...field}
                          type="text"
                          size={'lg'}
                          placeholder="Ваша фамилия"
                        />
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="gender">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Выберите ваш пол</FormLabel>
                        <RadioGroup
                          {...field}
                          colorScheme="teal"
                          onChange={_value => {
                            form.setFieldValue('gender', _value);
                          }}
                        >
                          <HStack spacing={4}>
                            <Radio value="male">Мужчина</Radio>
                            <Radio value="female">Женщина</Radio>
                          </HStack>
                        </RadioGroup>
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="years_old">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Дата вашего рождения</FormLabel>
                        <Input {...field} type="date" size={'lg'} />
                      </FormControl>
                    );
                  }}
                </Field>
              </Flex>

              <Flex gap={2} mt={8}>
                <Button
                  colorScheme="teal"
                  variant={'outline'}
                  as={RouterLink}
                  to={'/'}
                >
                  Уже есть аккаунт?
                </Button>
                <Button colorScheme="teal" type="submit">
                  Зарегистрироваться
                </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Registration;
