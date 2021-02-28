/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { MdSentimentDissatisfied } from 'react-icons/md';

import Character from '../Character';

export default function CharactersList() {
  const [favorite, setFavorite] = useState({});

  const characters = useSelector((state) => {
    if (state.characters.text) {
      return state.characters.characters.filter((character) =>
        character.name
          .toLowerCase()
          .includes(state.characters.text.toLowerCase())
      );
    }

    return state.characters.characters;
  });

  const loading = useSelector((state) => state.characters.loading);

  const error = useSelector((state) => state.characters.error);

  const onChangeFavorite = (id) => {
    setFavorite((prevFavorite) => ({
      ...prevFavorite,
      [id]: !prevFavorite[id],
    }));
  };

  if (loading) {
    return (
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justify="center"
        style={{ minHeight: '50vh' }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid item md={12} xs={12}>
        <Alert severity="error">
          <AlertTitle>Error!</AlertTitle>
        </Alert>
      </Grid>
    );
  }

  return (
    <>
      {(characters &&
        characters.length > 0 &&
        characters.map((character, key) => (
          <Grid key={key} item lg={4} md={6} xs={12}>
            <Character
              item={character}
              favorite={favorite[character.name]}
              onChangeFavorite={() => onChangeFavorite(character.name)}
            />
          </Grid>
        ))) || (
        <Grid
          container
          direction="column"
          alignItems="center"
          alignContent="center"
          justify="center"
          style={{ minHeight: '50vh' }}
        >
          <MdSentimentDissatisfied size={100} />
          <Typography variant="h4" component="h4">
            No characters found!
          </Typography>
        </Grid>
      )}
    </>
  );
}
