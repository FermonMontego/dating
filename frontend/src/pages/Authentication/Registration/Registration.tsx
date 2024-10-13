import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { http } from 'http/http';

import { Form, Link as RouterLink } from 'react-router-dom';
import { TYPES_NOTIFICATION } from '../../../enums/types-notification';
import RegistrationFormWidget from 'src/widgets/RegistrationFormWidget/RegistrationFormWidget';

const Registration = () => {
  const { handleSubmit } = useForm({
    mode: 'onSubmit',
  });

  const submitRegistration = useCallback(async data => {
    await http.post('/registration', {
      ...data,
    });
  }, []);

  return <RegistrationFormWidget />;
};

export default Registration;
