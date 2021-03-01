import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

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
  const [pageNumber, setPageNumber] = useState(1);
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
        .get(`people/?page=${pageNumber}`, { params: filter })
        .then((response) => {
          const peopleList = response.data.results.map((people) => ({
            ...people,
            characterPlanet: getPlanet(people.homeworld),
          }));

          function compare(a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;
          }

          peopleList.sort(compare);
          dispatch(listCharacters(peopleList));
        })
        .catch((error) => {
          dispatch(failureCharacters(error));
        });
    }
    getCharacters();
  }, [dispatch, filter, planets, pageNumber]);

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
      <br />
      <Pagination
        count={10}
        onChange={(e, page) => {
          setPageNumber(page);
        }}
        size="large"
      />
    </Container>
  );
}
