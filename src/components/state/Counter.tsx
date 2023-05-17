import React, { FC } from "react";
import { useReducer } from "react";
import { CounterState, Action } from "./Types";

const Counter = () => {
  const initialState = { count: 0 };

  const reducer = (state: CounterState, action: Action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      case "DECREMENT":
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};

export { Counter };
