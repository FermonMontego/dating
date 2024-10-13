import { Box, Divider, Text } from '@chakra-ui/react';
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Form } from 'react-router-dom';

type Props = {
  onSubmitForm: () => void;
  titleForm?: string | ReactElement;
} & PropsWithChildren;

const BaseForm: FC<Props> = ({ children, onSubmitForm, titleForm }) => {
  return (
    <Box
      border={'1px solid var(--chakra-colors-chakra-border-color)'}
      p={8}
      borderRadius={'16px'}
      maxW={440}
      margin={'50px auto 0px'}
    >
      <Form onSubmit={onSubmitForm}>
        {titleForm && (
          <>
            <Text fontSize={21} fontWeight={600} textAlign={'center'}>
              {titleForm}
            </Text>
            <Divider mt={4} mb={4} />
          </>
        )}

        {children}
      </Form>
    </Box>
  );
};

export default BaseForm;
