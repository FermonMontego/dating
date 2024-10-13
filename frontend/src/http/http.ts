import axios from 'axios';

import { env } from '../env/env';

const http = axios.create({
  baseURL: env.base_dev_url,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

http.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    const { status, response } = error;

    if (status === 400) {
      throw new Error(response?.data?.message);
    }
  },
);

export { http };
