const init_state = {
  conter: 0,
};

const conter = (state = init_state, actions) => {
  switch (actions.type) {
    case "INCRMENT":
      return {
        ...state,
        conter: ++state.conter,
      };
    case "DECRMENT":
      return {
        ...state,
        conter: --state.conter,
      };
    default:
      return state;
  }
};

export default conter;
