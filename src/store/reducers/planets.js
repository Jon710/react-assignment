const INITIAL_STATE = {
  planets: [],
  loading: true,
  error: null,
};

export default function planets(state = INITIAL_STATE, action) {
  const reducers = {
    SUCCESS_PLANETS: {
      ...state,
      planets: action.payload,
      loading: false,
      error: null,
    },
    FAILURE_PLANETS: {
      ...state,
      planets: [],
      loading: false,
      error: action.payload,
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
}
