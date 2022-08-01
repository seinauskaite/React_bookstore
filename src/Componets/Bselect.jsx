import { useState } from "react";

function Bselect() {
  const [select, setSelect] = useState("black");
  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };

  // const [goValue, setgovalue] = useState("");

  const selectChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <h1 style={{ color: select }}>COLOR</h1>
      <select onChange={selectChange} value={select}>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
      </select>
    </>
  );
}

export default Bselect;
