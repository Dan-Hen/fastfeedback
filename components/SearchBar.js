import React, { useState } from 'react';
import {
  Box,
  Input,
  IconButton
} from '@chakra-ui/react'
import { SearchIcon, TimeIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <Box display="flex" justifyContent="flex-end" mb={'20px'}>
      <Input
        width="40%"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          console.log(event.target.value)
        }}
      />
      <IconButton
        aria-label="icon"
        icon={<SearchIcon />}
        size="md"
      />
      <IconButton
        aria-label="icon"
        icon={<TimeIcon />}
        size="md"
        onClick={() => setSearch('')}
      />
    </Box>
  );
};

export default SearchBar
