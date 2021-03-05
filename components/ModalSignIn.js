import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import AuthForm from './AuthForm';

/**
 * Authentication for existing users
 */
const ModalSignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Sign in</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          backgroundColor="whiteAlpha.500"
          boxShadow="-webkit-box-shadow: -5px -2px 18px 1px rgba(0,0,0,0.38); -moz-box-shadow: -5px -2px 18px 1px rgba(0,0,0,0.38); box-shadow: -5px -2px 18px 1px rgba(0,0,0,0.38);"
          opacity={1}
          borderRadius="20px"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AuthForm
                isSignIn={true}
                closeModal={onClose}
              />
            </ModalBody>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};

export default ModalSignIn;
