import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";

import Stor from "./redux/Stor";
import { INCRMENT, DECRMENT } from "./redux/actions/conter";

function Root (){

  const conter = useSelector(state => {
    console.log(state)
    return state.conter
  });

  
  var add = () => {
    Stor.dispatch(INCRMENT());
  };
  var sub = () => {
    Stor.dispatch(DECRMENT());
  };

    return (
      <div>
        <button onClick={sub}>-</button>
        <h1>{conter}</h1>
        <button onClick={add}>+</button>
      </div>
    );

}

export default Root;
