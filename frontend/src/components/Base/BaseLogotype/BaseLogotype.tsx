import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Link as RouterLink } from 'react-router-dom';

type Props = {}

const BaseLogotype: FC<Props> = () => {
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
