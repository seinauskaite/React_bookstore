import "./App.css";
import { useState } from "react";

import A_stateuplift from "./Componets/A_stateuplift";
import B_stateuplift from "./Componets/B_stateuplift";
import A_uplift from "./Componets/A_uplift";
import B_uplift from "./Componets/B_uplift";
import A_uplift2 from "./Componets/A_uplift2";
import B_uplift2 from "./Componets/B_uplift2";

function App() {
  const [show, setShow] = useState(false);

  const makeShow = (doShow) => {
    setShow(doShow);
  };

  //// Paprastas pavyzdys UP Lift'o

  const [melynosRaides, setMelynosRaides] = useState();

  const virvute = (duomenys) => {
    setMelynosRaides(duomenys);
  };

  //// uzduotis

  const [color, setColor] = useState("yellow");

  const virvute2 = (duomenys) => {
    setColor(duomenys ? "green" : "blue");
  };

  return (
    <div className="App">
      <>
        <A_stateuplift makeShow={makeShow}></A_stateuplift>
        <B_stateuplift show={show}></B_stateuplift>

        <h2>Paprastas pavyzdys UP Lift'o</h2>
        <A_uplift virvute={virvute}></A_uplift>
        <B_uplift melynosRaides={melynosRaides}></B_uplift>

        <h1>Chackbox + Button keicia spalva</h1>
        <A_uplift2 virvute2={virvute2}></A_uplift2>
        <B_uplift2 color={color}></B_uplift2>
      </>
    </div>
  );
}

export default App;
