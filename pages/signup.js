import React from 'react'
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Container>
      <FormControl>
        <FormLabel>email</FormLabel>
        <Input placeholder="Enter your email" />
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>password</FormLabel>
        <Input placeholder="Choose your password" />
        <FormErrorMessage>Error message</FormErrorMessage>
      </FormControl>
      <Button variant="solid" size="md" colorScheme="purple" display="flex">
        Sign in
      </Button>
    </Container>
  </ChakraProvider>
)

export default App
