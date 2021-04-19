import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import DashboardShell from '../components/DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Flex flexDirection="column" justifyContent="center">
      <Heading size="sm" m="10px">
        Get feedback on your site instantly
      </Heading>
      <Text display="flex" flexDirection="column" textAlign="center">
        Try it out today
      </Text>
      <Box display="flex" justifyContent="center" mb="5px">
        <Button
          variant="solid"
          size="md"
          backgroundColor="purple.500"
          colorScheme="purple"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Go
        </Button>
      </Box>
    </Flex>

  </DashboardShell>
)

export default FreePlanEmptyState
