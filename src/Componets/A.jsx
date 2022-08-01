import { useState } from "react";
import C from "./C";

function A() {
  const [a, setA] = useState("");

  // const addA = () => {
  //   setA("A");
  // };

  const [c, setC] = useState("");

  // const sendC = () => {
  //   setC("C");
  // };

  const sendCA = () => {
    setA((togl) => (togl === "A" ? "C" : "A"));
    setC((togl2) => (togl2 === "C" ? "A" : "C"));
  };

  return (
    <>
      <button onClick={sendCA}>Add C and A</button>
      <h1 style={{ color: "aqua" }}>{a}</h1>
      <C c={c}></C>
    </>
  );
}

export default A;
