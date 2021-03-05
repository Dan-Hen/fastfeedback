import React, { useState } from 'react';
import { useAuth } from '../lib/auth';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Box,
  CloseButton,
  Button,
  Text
} from '@chakra-ui/react'

const AuthForm = (props) => {
  const {
    isSignIn,
    closeModal,
  } = props;
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmPassword, setConfirmPassword] = useState(undefined);
  const [loginError, setLoginError] = useState(undefined);
  const auth = useAuth();

  const onSubmit = async (event) => {
    console.log('clicked')
    try {
      if (!isSignIn) {
        if (password === confirmPassword) {
          // Create account
          const result = await auth.createUser(email, password);
          console.log('result', result);
          setLoginError(undefined);
          closeModal();
        } else {
          setLoginError(new Error('Les deux mots de passe ne sont pas identiques'));
        }

      } else {
        // Login existing user
        const result = await auth.signinWithEmailPassword(email, password);
        console.log('result', result);
        setLoginError(undefined);
        closeModal();
      }
    } catch (e) {
      setLoginError(e);
    }
  };

  return (
      <Box m="30px">
        <FormControl mb="20px">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Adress@example.com"
            onChange={(event) => setEmail(event.target.value)}

          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl mb="20px">
          <FormLabel>Password</FormLabel>
          <Input
            type={'password'}
            placeholder="Choose a password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>

        {
          !isSignIn && (
          <Box mb="20px">
          <FormLabel>Confirm password</FormLabel>
          <Input
            type={'password'}
            placeholder="Write again your password "
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
            <FormErrorMessage>Error message</FormErrorMessage>
        </Box>
          )
        }

        {
          loginError && (
            <div>{loginError?.message}</div>
          )
        }

        <Box display="flex" alignItems="center" flexDirection="column">
          <Button
            variant="solid"
            size="md"
            onClick={onSubmit}
          >
            {
              isSignIn ? (
                <span>Sign In</span>
              ) : (
                <span>Sign Up</span>
              )
            }
          </Button>
        </Box>
      </Box>
  );
};

export default AuthForm;
