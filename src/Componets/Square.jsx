import { useState } from "react";
import { Component } from "react";

function Square() {
  //   const [nr, setNr] = useState(11);
  //   const changeNr = () => {
  //     setNr(257);
  //   };

  const [kv, setKv] = useState([]);
  const addKv = () => {
    setKv((items) => [...items, 1]);
  };

  return (
    <>
      <div className="kv">XXX</div>
      <button onClick={addKv}>add</button>
    </>
  );
}

export default Square;
