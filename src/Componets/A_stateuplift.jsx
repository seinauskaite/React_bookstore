import { useState } from "react";

function A_stateuplift({ makeShow }) {
  const [checkbox, setCheckbox] = useState(false);

  const isCheck = () => {
    makeShow(!checkbox);

    setCheckbox((c) => !c);
  };

  return (
    <>
      <h1>checkbox</h1>
      <input type="checkbox" onChange={isCheck} checked={checkbox}></input>
    </>
  );
}

export default A_stateuplift;
