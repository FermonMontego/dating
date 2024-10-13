import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';

import Autorization from '../pages/Authentication/Authorization/Autorization.tsx';
import Registration from '../pages/Authentication/Registration/Registration';
import Rules from '../pages/Rules/Rules';
import ForgotPassword from '../pages/Authentication/ForgotPassword/ForgotPassword';
import Ankets from '../pages/Ankets/Ankets.tsx';
import Advantages from '../pages/Advantages/Advantages.tsx';

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
    path: '/rules',
    element: (
      <DefaultLayout>
        <Rules />
      </DefaultLayout>
    ),
  },
  {
    path: '/ankets',
    element: (
      <DefaultLayout>
        <Ankets />
      </DefaultLayout>
    ),
  },
  {
    path: '/advantages',
    element: (
      <DefaultLayout>
        <Advantages />
      </DefaultLayout>
    ),
  },
];
