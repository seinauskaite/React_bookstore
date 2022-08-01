import { useState } from "react";

function F() {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);

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
    </>
  );
}

export default F;
