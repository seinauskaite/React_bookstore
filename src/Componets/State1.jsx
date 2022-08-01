import { useState } from "react";

function State1() {
  const [shape, setShape] = useState("sq_big");

  const changeShape = () => {
    if (shape === "kv_big") {
      setShape("sq_big");
    } else setShape("kv_big");
  };

  return (
    <>
      <div className="kvc">
        <div className={shape}></div>
        <button onClick={changeShape}>CHANGE</button>
      </div>
    </>
  );
}

export default State1;
