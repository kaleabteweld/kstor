import React, { Component } from "react";
import { useSelector } from "react-redux";

import Stor from "./redux/Stor";
import { INCRMENT, DECRMENT } from "./redux/actions/conter";

class Root extends Component {
  conter = useSelector((state) => state.conter);

  add = () => {
    Stor.dispatch(INCRMENT());
  };
  sub = () => {
    Stor.dispatch(DECRMENT());
  };

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <h1>{this.conter}</h1>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default Root;
