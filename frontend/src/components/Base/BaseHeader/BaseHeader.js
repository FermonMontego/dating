import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import BaseLogotype from '../BaseLogotype/BaseLogotype';
import { Link as RouterLink } from 'react-router-dom';

const headerConfig = {
  as: 'header',
  borderBottom: '1px solid var(--chakra-colors-chakra-border-color)',
  p: 4,
  background: 'white',
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 2,
};

const BaseHeader = props => {
  return (
    <Box {...headerConfig}>
      <Container maxW={1440}>
        <Flex gap={8} alignItems={'center'}>
          <BaseLogotype />
          <Stack direction={'row'} spacing={6} alignItems={'center'}>
            <Menu>
              <MenuButton as={Link}>
                <Flex gap={2} alignItems="center">
                  <Text>Наши предложения</Text>
                  <ChevronDownIcon />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>VIP подписка</MenuItem>
                <MenuItem>VIP+ подписка</MenuItem>
                <MenuItem>PLATINUM подписка</MenuItem>
              </MenuList>
            </Menu>
            <RouterLink to={'/advantages'}>Что умеет приложение?</RouterLink>
            <RouterLink to={'/rules'}>Правила</RouterLink>
            <RouterLink to={'/ankets'}>Смотреть анкеты</RouterLink>
          </Stack>
          <Spacer></Spacer>
          <Stack direction="row" spacing={2}>
            <Button
              as={RouterLink}
              to={'/'}
              colorScheme="teal"
              variant={'solid'}
            >
              Войти
            </Button>
            <Button
              as={RouterLink}
              to={'/registration'}
              colorScheme="teal"
              variant={'outline'}
            >
              Регистрация
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default BaseHeader;
