import { createStore } from "redux";

import conter from "./reducers/REconter";

import { INCRMENT, DECRMENT } from "./actions/conter";

let Stor = createStore(
  conter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Stor;
