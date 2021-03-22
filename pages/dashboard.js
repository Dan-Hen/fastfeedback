import React from 'react'
import {
  ChakraProvider,
  Box,
  Link,
  Avatar,
  Text,
} from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import AddSiteModal from '../components/AddSiteModal';

const App = () => (
  <ChakraProvider resetCSS>
    <Box backgroundColor="blackAlpha.100">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        backgroundColor="white"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="200px"
        >
          <SunIcon
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml={5}
          />
          <Link display="flex" alignItems="center">
            Feedback
          </Link>
          <Link display="flex" alignItems="center">
            Sites
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Link m={5}>Account</Link>
          <Avatar m={5} />
        </Box>
      </Box>
      <Box p="50px">
        <Box m="30px">
          <Box display="block" mb="50px">
            <Text ml={0} pl={0}>
              Sites /
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              Sites
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="50px"
            backgroundColor="white"
            borderRadius="10px"
            opacity={1}
          >
            <Text fontWeight="bold" fontSize="lg">
              Get feedback on your site instantly !
            </Text>
            <Text>Start today, then grow with us 🌱</Text>
            <AddSiteModal />
          </Box>
        </Box>
      </Box>
    </Box>
  </ChakraProvider>
)
export default App
