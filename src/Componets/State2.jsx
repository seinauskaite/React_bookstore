import { useState } from "react";
import rand from "../Functions/rand";

function State2() {
  const [shape, setShape] = useState("sq_big");
  const [number, setNumber] = useState(0);

  const changeShape = () => {
    shape === "kv_big" ? setShape("sq_big") : setShape("kv_big");
  };

  const changeNumber = () => {
    setNumber(rand(5, 25));
  };

  return (
    <>
      <div className="kvc">
        <div className={shape}>{number}</div>
        <button onClick={changeShape}>CHANGE</button>
        <button onClick={changeNumber}>RANDOM</button>
      </div>
    </>
  );
}

export default State2;
