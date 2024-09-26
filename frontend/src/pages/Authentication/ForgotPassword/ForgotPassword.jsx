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
const ForgotPassword = () => {
  return (
    <Box
      border={'1px solid var(--chakra-colors-chakra-border-color)'}
      p={8}
      borderRadius={'16px'}
      maxW={440}
      margin={'50px auto 0px'}
    >
      <Formik initialValues={{}}>
        {propsFormik => (
          <Form>
            <Flex flexDirection={'column'} gap={4}>
              <Center>
                <Heading as={'h3'} size={'lg'}>
                  Восстановление пароля
                </Heading>
              </Center>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel fontSize={14}>Ваша почта</FormLabel>
                    <Input
                      size={'lg'}
                      {...field}
                      placeholder="Введите ваш email"
                    />
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Flex direction="row" gap={2} mt={8} justifyContent={'center'}>
              <Button
                colorScheme="teal"
                isLoading={propsFormik.isSubmitting}
                type="submit"
              >
                Отправить
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ForgotPassword;
