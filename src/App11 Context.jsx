import "./App.css";
import { useState } from "react";
import Senelis from "./Componets/Senelis";
import SenelioZinios from "./Contexts/SenelioZinios";

function App() {
  const [kaSakoSenelis, keistiKaSakoSenelis] = useState(0);
  const [kaSakoSenelis2, keistiKaSakoSenelis2] = useState(0);

  return (
    <div className="App">
      <>
        <h1>{kaSakoSenelis}</h1>
        <button
          onClick={() => {
            keistiKaSakoSenelis((c) => c + 1);

            keistiKaSakoSenelis2((c) => c + 10);
          }}
        >
          Sakyk, Seneli
        </button>

        <SenelioZinios.Provider value={kaSakoSenelis}>
          <SenelioZinios.Provider value={kaSakoSenelis2}>
            <Senelis></Senelis>
          </SenelioZinios.Provider>
        </SenelioZinios.Provider>
      </>
    </div>
  );
}

export default App;
