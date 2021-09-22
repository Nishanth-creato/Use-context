import React, { useReducer, createContext } from "react";
import State2 from "./State2";
import State3 from "./State3";
import "./App.css";

export const myContext = createContext();
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};
 function App() {
  const [items, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ items, dispatch }}>
      <State2 />
      <State3 />
    </myContext.Provider>
  );
}
export default App
