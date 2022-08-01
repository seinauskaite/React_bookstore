import { useState } from "react";
import Kv from "./Kv";

function C() {
  const [checkbox, setCheckbox] = useState(false);
  const [showBlue, setShowblue] = useState(false);

  const handleInput = () => {
    setCheckbox((c) => !c);
  };

  const show = () => {
    setShowblue(checkbox);
  };

  return (
    <>
      <div>
        {showBlue ? (
          <div
            style={{ width: "100px", height: "100px", background: "aqua" }}
          ></div>
        ) : null}
      </div>
      <input type="checkbox" onChange={handleInput} checked={checkbox}></input>
      <button onClick={show}>show or not</button>
    </>
  );
}

export default C;
