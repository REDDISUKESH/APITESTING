import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value, setSearchQuery]);

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
