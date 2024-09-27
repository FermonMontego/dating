import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export { http };