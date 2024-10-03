import axios from 'axios';

import {env} from '../env/env'

const http = axios.create({
  baseURL: env.base_dev_url,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export { http };
