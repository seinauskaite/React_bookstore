import "./App.css";
import Mygtukas from "./Componets/Mygtukas";
import { useState } from "react";
import H2 from "./Componets/H2";
import Kv from "./Componets/Kv";

function App() {
  const [sk, setSk] = useState(0);
  const [kv, setKv] = useState([]);

  const add = () => {
    setSk((s) => {
      setKv((k) => {
        return k.map((skaicius) => sk + 1);
      });
      return s + 1;
    });
  };

  const addkv = () => {
    setKv((k) => [...k, sk * 3]);
  };

  return (
    <div className="App">
      <>
        <H2 skaicius={sk}></H2>
        <Mygtukas
          sniurelis={add}
          sniurelis2={addkv}
          count={kv.length}
        ></Mygtukas>
        <div className="kvc">
          <Kv kv={kv}></Kv>
        </div>
      </>
    </div>
  );
}

export default App;
