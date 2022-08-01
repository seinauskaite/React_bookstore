import { useState } from "react";

function Ainput() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const [goValue, setgovalue] = useState("");

  const go = () => {
    setgovalue(input);
  };

  return (
    <>
      <h1 style={{ color: "aqua" }}>{goValue}</h1>
      <input type="text" value={input} onChange={handleInput}></input>
      <button onClick={go}>Go</button>
    </>
  );
}

export default Ainput;
