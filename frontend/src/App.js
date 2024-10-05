import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';

import { router } from './routes/router';

const App = () => {
  return (
    <ChakraProvider>
      <ToastProvider>
        <RouterProvider router={router}></RouterProvider>
      </ToastProvider>
    </ChakraProvider>
  );
};

export default App;
