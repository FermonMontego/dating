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

import { useToastNotification } from '../../../hooks/useToastNotification';

import { http } from 'http/http';

import { Link as RouterLink } from 'react-router-dom';
import { TYPES_NOTIFICATION } from '../../../enums/types-notification';

const Registration = () => {

  const { updateToastList } = useToastNotification()

  const submitRegistration = useCallback(async (values, actions) => {
    updateToastList({
      id: new Date().getTime(),
      title: 'Ошибка',
      text: 'Какая-то ошибка',
      type: TYPES_NOTIFICATION.error
    });
    await http.post('/registration', {
      ...values
    });

    console.log(values, actions);
  }, []);

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
                        <FormLabel>Введите вашу почту</FormLabel>
                        <Input
                          {...field}
                          type="email"
                          size={'lg'}
                          placeholder="Ваша почта example@example.com"
                        />
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="first_name">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Как вас зовут?</FormLabel>
                        <Input
                          {...field}
                          type="text"
                          size={'lg'}
                          placeholder="Введите ваше имя"
                        />
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="last_name">
                  {({ field, form }) => {
                    return (
                      <FormControl>
                        <FormLabel>Ваша фамилия</FormLabel>
                        <Input
                          {...field}
                          type="text"
                          size={'lg'}
                          placeholder="Введите вашу фамилию"
                        />
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
              </Flex>

              <Flex gap={2} mt={8} justifyContent={"space-between"}>
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
