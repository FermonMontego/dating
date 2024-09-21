import React from 'react';
import BaseHeader from '../components/Base/BaseHeader/BaseHeader';
import { Container } from '@chakra-ui/react';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <BaseHeader />
      <Container maxW={1440} margin={'40px auto'}>
        {children}
      </Container>
    </>
  );
};

export default DefaultLayout;
