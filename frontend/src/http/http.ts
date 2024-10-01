import axios from 'axios';

import {env} from '../env/env'

const http = axios.create({
  baseURL: env.production_api_uri,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export { http };
