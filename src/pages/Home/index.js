import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import SearchFilter from '../../components/SearchFilter';
import CharactersList from '../../components/CharactersList';
import Logo from '../../components/Logo';
import api from '../../services/api';
import {
  loadingCharacters,
  listCharacters,
  failureCharacters,
} from '../../store/actions/characters';

export default function Home() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.characters.filter);
  const planets = useSelector((state) => state.planets.planets);

  useEffect(() => {
    function getPlanet(planetUrl) {
      const url = planetUrl.split('/')[5] - 1;
      const planetName = planets[url] && planets[url].name;

      return planetName;
    }

    async function getCharacters() {
      dispatch(loadingCharacters());
      await api
        .get('people/', { params: filter })
        .then((response) => {
          const peopleList = response.data.results.map((people) => ({
            ...people,
            characterPlanet: people.homeworld && getPlanet(people.homeworld),
          }));

          dispatch(listCharacters(peopleList));
        })
        .catch((error) => {
          dispatch(failureCharacters(error));
        });
    }

    getCharacters();
  }, [dispatch, filter, planets]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid
          container
          direction="row"
          alignItems="center"
          alignContent="center"
          justify="space-between"
        >
          <Logo />
          <SearchFilter />
        </Grid>
        <CharactersList />
      </Grid>
    </Container>
  );
}
