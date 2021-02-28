export const listPlanets = (payload) => ({
  type: 'SUCCESS_PLANETS',
  payload,
});

export const failurePlanets = (payload) => ({
  type: 'FAILURE_PLANETS',
  payload,
});
