import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './main.scss';
import './fonts/fonts.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
