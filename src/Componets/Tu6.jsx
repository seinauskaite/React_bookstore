import { useState } from "react";
import rand from "../Functions/rand";

function Tu6() {
  const [b, setB] = useState([]);
  const [selected, setSelected] = useState([]);

  let nr = rand(5, 15);

  function newBallSet() {
    let arr = [];
    for (let i = 0; i < nr; i++) {
      arr.push(1);
    }
    setB(arr);
    console.log(b);
  }

  function change() {
    let arr2 = [];
    arr2.push(1);
    setSelected(arr2);
    console.log("selected");
  }

  return (
    <>
      <div className="kvc">
        <button className="button" onClick={newBallSet}>
          RESET
        </button>
      </div>
      <div className="wrap">
        <div className="balls">
          <Ball balls={b} change={change}></Ball>
        </div>
        <div className="balls">
          <Ball balls={selected}></Ball>
        </div>
      </div>
    </>
  );
}

export default Tu6;

//////// Balls komponentas

function Ball({ balls, change }) {
  return (
    <div className="kvc">
      {balls.map((_, i) => (
        <div key={i} className="sq_big">
          <h1 onClick={change}>{i + 1}</h1>
        </div>
      ))}
    </div>
  );
}
