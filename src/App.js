import React from "react";
import { increment, decrement, reset } from "./action/index";
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const counterVal = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>React app Component</h1>
      <h3>count val is {counterVal}</h3>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </>
  );
}
