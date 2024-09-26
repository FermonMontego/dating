import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';

import Autorization from '../pages/Authentication/Authorization/Autorization.tsx';
import Registration from '../pages/Authentication/Registration/Registration';
import Rules from '../pages/Rules/Rules';
import ForgotPassword from '../pages/Authentication/ForgotPassword/ForgotPassword';

export default [
  {
    path: '/',
    element: (
      <DefaultLayout>
        <Autorization />
      </DefaultLayout>
    ),
  },
  {
    path: '/registration',
    element: (
      <DefaultLayout>
        <Registration />
      </DefaultLayout>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <DefaultLayout>
        <ForgotPassword />
      </DefaultLayout>
    ),
  },
  {
    path: 'rules',
    element: <Rules />,
  },
];
