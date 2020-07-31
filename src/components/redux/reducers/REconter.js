const init_state = {
  conter: 0,
};

const conter = (state = init_state, actions) => {
  switch (actions.type) {
    case "INCRMENT":
      return {
        conter: ++state.conter,
      };
    case "DECRMENT":
      return {
        conter: --state.conter,
      };
  }
};

export default conter;
