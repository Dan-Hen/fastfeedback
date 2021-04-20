import React from 'react'
import {
  Box,
  Input,
  IconButton
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => (
  <Box display="flex" justifyContent="flex-end" mb={'20px'}>
    <Input
      width="40%"
    />
    <IconButton aria-label="icon" icon={<SearchIcon />} size="md" />
  </Box>
)

export default SearchBar
