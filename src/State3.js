import React, { useContext } from "react";

import { myContext } from "./App";
const State3 = () => {
  const { items } = useContext(myContext);
  return (
    <>
      {items.map((item, index) => (
          <center>
        <p key={index}>{item}</p>
        </center>
      ))}
    </>
  );
}
export default State3
