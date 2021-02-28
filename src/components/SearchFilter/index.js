import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';
import { Grid, TextField, InputAdornment } from '@material-ui/core';

import { searchCharacters } from '../../store/actions/characters';

export default function SearchFilter() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCharacters(search));
  }, [search, dispatch]);

  return (
    <>
      <Grid item lg={10} md={8} xs={12}>
        <TextField
          id="search"
          label="Search character..."
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdSearch />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </>
  );
}
