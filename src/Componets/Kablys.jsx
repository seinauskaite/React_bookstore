//TOPIC - using State Hook
// Hook naudojami tik funckcijose
// Class nebenaudosim, Hook dbr naudojami per Funkcijas

import { useState } from "react";

function Kablys({ color }) {
  const [nr, setNr] = useState(11);
  const changeNr = () => {
    setNr(257);
  };

  const [font, setFont] = useState("30px");
  const changeFont = () => {
    setFont("60px");
  };

  const [kv, setKv] = useState([]);
  const addKv = () => {
    setKv((items) => [...items, 1]);
  };

  return (
    <>
      <div style={{ color: color, fontSize: font }}>As Kablys Nr. {nr}</div>
      <button onClick={changeNr}>Go</button>
      <button onClick={changeFont}>Big Font</button>
      <button onClick={addKv}>add Kvadrt</button>
      <div className="kv">XXX</div>
    </>
  );
}

export default Kablys;
