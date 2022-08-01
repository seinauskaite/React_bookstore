import { useState } from "react";

function E() {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  const [color, setColor] = useState("blue");

  const handleInput1 = () => {
    setCheckbox1((c) => !c);
  };
  const handleInput2 = () => {
    setCheckbox2((c) => !c);
  };

  return (
    <>
      <h1>checkbox</h1>
      <input
        type="checkbox"
        onChange={handleInput1}
        checked={checkbox1}
      ></input>
      <input
        type="checkbox"
        onChange={handleInput2}
        checked={checkbox2}
      ></input>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: checkbox1 && checkbox2 ? "aqua" : "transparent",
        }}
      ></div>
    </>
  );
}

export default E;
