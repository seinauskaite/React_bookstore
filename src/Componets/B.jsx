import { useState } from "react";

function B() {
  const [b, setB] = useState("B");

  const toggleB = () => {
    setB((toglinam) => (toglinam === "B" ? "" : "B"));
  };

  return (
    <>
      <button type="text" onChange={toggleB}>
        ToggleB
      </button>
      <h1 style={{ color: "aqua" }}>{b}</h1>
    </>
  );
}

export default B;
