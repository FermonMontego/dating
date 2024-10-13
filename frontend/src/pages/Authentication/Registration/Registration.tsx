import { Box, Divider, Input, Stack, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { useToastNotification } from '../../../hooks/useToastNotification';

import { useForm } from 'react-hook-form';

import { http } from 'http/http';

import { Form, Link as RouterLink } from 'react-router-dom';
import { TYPES_NOTIFICATION } from '../../../enums/types-notification';

const Registration = () => {
  const { updateToastList } = useToastNotification();

  const { handleSubmit } = useForm({
    mode: 'onSubmit',
  });

  const submitRegistration = useCallback(async data => {
    updateToastList({
      id: new Date().getTime(),
      title: 'Ошибка',
      text: 'Какая-то ошибка',
      type: TYPES_NOTIFICATION.error,
    });
    await http.post('/registration', {
      ...data,
    });
  }, []);

  return (
    <Box
      border={'1px solid var(--chakra-colors-chakra-border-color)'}
      p={8}
      borderRadius={'16px'}
      maxW={440}
      margin={'50px auto 0px'}
    >
      <Form onSubmit={handleSubmit(submitRegistration)}>
        <Text fontSize={'21px'} fontWeight={600} textAlign={'center'}>
          Регистрация
        </Text>

        <Divider mt={4} mb={4} />

        <Stack gap={'8px'}>
          <Stack>
            <Text fontSize={14}>Придумайте логин</Text>
            <Input placeholder={'Логин (латиница)'} />
          </Stack>
          <Stack>
            <Text fontSize={14}>Ваше имя</Text>
            <Input placeholder={'Введите имя'} />
          </Stack>
          <Stack>
            <Text fontSize={14}>Ваша фамилия</Text>
            <Input placeholder={'Введите фамилию'} />
          </Stack>
          <Stack>
            <Text fontSize={14}>Дата рождения</Text>
            <Input placeholder={'Введите дату рождения'} type="date" />
          </Stack>
        </Stack>
      </Form>
    </Box>
  );
};

export default Registration;
