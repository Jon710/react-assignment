const INITIAL_STATE = {
  characters: [],
  loading: true,
  error: null,
};

export default function characters(state = INITIAL_STATE, action) {
  const reducers = {
    LOADING_CHARACTERS: {
      ...state,
      loading: true,
      error: null,
    },
    SUCCESS_CHARACTERS: {
      ...state,
      characters: action.payload,
      loading: false,
      error: null,
    },
    FAILURE_CHARACTERS: {
      ...state,
      characters: [],
      loading: false,
      error: action.payload,
    },
    SEARCH_CHARACTERS: {
      ...state,
      text: action.payload,
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
}
