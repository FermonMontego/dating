import {
  Box,
  Checkbox,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { useToastNotification } from '../../../hooks/useToastNotification';

import { useForm } from 'react-hook-form';

import { http } from 'http/http';

import { Form, Link as RouterLink } from 'react-router-dom';
import { TYPES_NOTIFICATION } from '../../../enums/types-notification';
import RegistrationFormWidget from 'src/widgets/RegistrationFormWidget/RegistrationFormWidget';

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

  return <RegistrationFormWidget />;
};

export default Registration;
