import { Fragment, useState } from 'react';
import { useAuth } from '../lib/auth';
import React from 'react'
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Center,
  FormErrorMessage,
  Button,
  useToast
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'

const AuthForm = (props) => {
  const {
    isSignIn,
    closeModal,
  } = props;
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [logInError, setLogInError] = useState(undefined);
  const auth = useAuth();
  const toast = useToast({
    position: 'bottom-right',
    isClosable: true,
  });

  // let [isSigningUp, setIsSigningUp] = useState(false);

  const onSubmit = () => {
    // create user
    try {
      if (!isSignIn) {
        if (password === confirmPassword) {
          // Create account
          auth.createUser(email, password);
          setLogInError(undefined);
          toast({
            title: "Success !",
            description: "We've created your account, you are now logged in.",
            status: "success",
            duration: 5000,
          });
          closeModal();

        } else {
          setLogInError(new Error('Les deux mots de passe ne sont pas identiques'));
        }

      } else {
        // Login existing user
        auth.signinWithEmailPassword(email, password);
        setLogInError(undefined);
        closeModal();
      }
    } catch (e) {
      setLogInError(e);
      toast({
        title: "Error",
        description: e.message,
        status: "success",
        duration: 5000,
      });
    }
  }

  return (
    <div className="auth-form">
      <Center mb="25px" mt="25px">
        <FormControl isRequired>
          <FormLabel>email</FormLabel>
          <Input
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
      </Center>

      <Center mb="25px" mt="25px">
        <FormControl isRequired mb="25px" mt="25px">
          <FormLabel>password</FormLabel>
          <Input
            placeholder="Choose your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
      </Center>

      {
        !isSignIn && (
          <Center mb="25px" mt="25px">
            <FormControl isRequired mb="25px" mt="25px">
              <FormLabel>confirm password</FormLabel>
              <Input
                placeholder="Confirm your password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
              <FormErrorMessage>Error message</FormErrorMessage>
            </FormControl>
          </Center>
        )
      }

      {
        logInError && (
          <div>{logInError?.message}</div>
        )
      }

      <Center mb="25px" mt="25px">
        <Button
          variant="solid"
          size="md"
          colorScheme="purple"
          display="flex"
          rightIcon={<CheckIcon />}
          flexDirection="row"
          justifyContent="flex-start"
          boxShadow={10}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Center>
    </div>
  );
};

export default AuthForm;
