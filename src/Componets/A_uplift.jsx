import { useState } from "react";

function A_uplift({ virvute }) {
  const [laukelioReiksme, setLaukelioReiksme] = useState("");

  const keistiReiksme = (e) => {
    setLaukelioReiksme(e.target.value);
    virvute(e.target.value);
  };

  return (
    <>
      <h1>state up filt pavyzdys</h1>
      <input
        type="text"
        value={laukelioReiksme}
        onChange={keistiReiksme}
      ></input>
    </>
  );
}

export default A_uplift;
