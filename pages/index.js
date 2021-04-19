import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useAuth } from '../lib/auth';
import React from 'react'
import {
  ChakraProvider,
  Container,
  Button,
  Flex,
  Link
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import ModalSignIn from '../components/ModalSignIn'
import ModalSignUp from '../components/ModalSignUp'
import DashboardShell from '../components/DashboardShell';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <p>
        Current user: {auth?.user ? auth.user.email : 'None'}
      </p>


      <Flex
        as="main"
        direction="row"
        align="center"
        justify="center"
        h="100vh"
      >
        <Head>
          <title>Fast Feedback</title>
        </Head>


        {auth.user ? (

          <Button as="a" href="/dashboard">
            Go to dashboard
          </Button>
        ) : (
          <Fragment>
            <Button onClick={(e) => auth.signinWithGithub()}>>
              Sign In with GitHub
            </Button>
            <ModalSignIn />
            <ModalSignUp />
          </Fragment>

        )}
      </Flex>
    </div>
  );
};

export default Home;
