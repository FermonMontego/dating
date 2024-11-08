import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/router';

import 'react-toastify/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  useEffect(() => {
    toast('Toast app', {
      type: 'error',
      position: 'bottom-right',
    });
  }, []);
  return (
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </ChakraProvider>
  );
};

export default App;
