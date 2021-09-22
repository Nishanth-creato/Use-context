import React, { useContext,useState } from "react";
import { myContext } from "./App";

 const State2 = () => {
  const { dispatch } = useContext(myContext);
  const [names, setNames] = useState('');
  const addItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: names });
    setNames('');
  };
  return (
      <div>
          <center>
    <form onSubmit={(e) => addItem(e)}>
      <input type="text" value={names} onChange={(e) => setNames(e.target.value)}/>
      <br />
      <input type="submit" value="submit" />
    </form>
    </center>
    </div>
  );
}
export default State2
