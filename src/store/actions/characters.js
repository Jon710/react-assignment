export const loadingCharacters = () => ({ type: 'LOADING_CHARACTERS' });

export const listCharacters = (payload) => ({
  type: 'SUCCESS_CHARACTERS',
  payload,
});

export const failureCharacters = (payload) => ({
  type: 'FAILURE_CHARACTERS',
  payload,
});

export const searchCharacters = (payload) => ({
  type: 'SEARCH_CHARACTERS',
  payload,
});
