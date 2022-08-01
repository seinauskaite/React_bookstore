import { useState } from "react";

function A_uplift2({ virvute2 }) {
  const [checkbox, setCheckbox] = useState(false);

  const changeCheckbox = () => {
    setCheckbox((c) => !c);
  };

  const change = () => {
    virvute2(checkbox);
  };

  return (
    <>
      <input
        type="checkbox"
        onChange={changeCheckbox}
        checked={checkbox}
      ></input>
      <br></br>
      <button onClick={change}>Change</button>
    </>
  );
}

export default A_uplift2;
