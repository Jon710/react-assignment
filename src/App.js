/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { listPlanets, failurePlanets } from './store/actions/planets';

import Home from './pages/Home';
import store from './store';
import api from './services/api';

export default function App() {
  const dispatch = useDispatch();

  let count = 0;
  const planetsArray = [];
  useEffect(() => {
    async function getPlanets() {
      for (let i = 0; i < 6; i++) {
        await api
          .get(`planets/?page=${count + 1}`)
          .then((response) => {
            response.data.results.map((result) => planetsArray.push(result));

            dispatch(listPlanets(planetsArray));
          })
          .catch((error) => {
            dispatch(failurePlanets(error));
          });

        count += 1;
      }
    }

    getPlanets();
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
