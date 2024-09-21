import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

const BaseLogotype = () => {
  return (
    <Box>
      <RouterLink to={'/'}>
        <Flex direction={'column'}>
          <Heading size={'sm'}>Base Logotype</Heading>
          <Text fontSize={10}>Description base logotype</Text>
        </Flex>
      </RouterLink>
    </Box>
  );
};

export default BaseLogotype;
