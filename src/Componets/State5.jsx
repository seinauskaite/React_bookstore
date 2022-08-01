import { useState } from "react";

function State5() {
  const [sq, setSq] = useState([1]);
  const [color, setColor] = useState("yellow");

  return (
    <>
      <button onClick={() => setSq([...sq, 1])}>ADD BLUE</button>
      <button onClick={() => setSq([...sq, 0])}>ADD RED</button>
      <button onClick={() => setSq([])}>RESET</button>

      <div className="kvc">
        {sq.map((k, i) =>
          k ? (
            <div key={i} className="kv_big"></div>
          ) : (
            <div key={i} className="kv_big_red"></div>
          )
        )}
      </div>
    </>
  );
}

export default State5;
