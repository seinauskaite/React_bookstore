import { useEffect, useReducer, useState } from "react";
import c2Reducer from "./Reducers/c2Reducer";
import kvReducer from "./Reducers/kvReducer";
import { add1, addManySq, rem1, remKv } from "./Actions/basic";
import { addKv, loadNames } from "./Actions/basic";
import getUserNamesFromServer from "./Constants/users";
import "./App.css";
import namesReducer from "./Reducers/namesReducer";

function App() {
  const [c1, setC1] = useState(0);
  const [c2, dispachC2] = useReducer(c2Reducer, 0);

  const [kv, dispachKv] = useReducer(kvReducer, []);
  const [input, setInput] = useState("");

  const [names, dispachNames] = useReducer(namesReducer, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispachNames(getUserNamesFromServer(res.data)));
  });

  return (
    <div className="App">
      <>
        <h1>ReDUCeR</h1>
        <h2>State count: {c1}</h2>
        <h2>Reducer count: {c2}</h2>

        <fieldset>
          <legend>LEGEND</legend>
          <button onClick={() => setC1((c) => c + 1)}>+</button>
          <button onClick={() => setC1((c) => c - 1)}>---</button>
        </fieldset>

        <fieldset>
          <legend>LEGEND</legend>
          <button onClick={() => dispachC2(add1())}>+1</button>
          <button onClick={() => dispachC2(rem1())}>--1</button>
        </fieldset>

        <fieldset>
          <legend>KVADRATUKAS</legend>
          <button onClick={() => dispachKv(addKv())}>+++</button>
          <button onClick={() => dispachKv(remKv())}>---</button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => dispachKv(addManySq(input))}>add many</button>

          <div className="kvc">
            {kv.map((s, i) => (
              <div key={i} className="kv"></div>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <label>NAMES from API</label>
          {/* <button onClick={dispachNames(loadNames())}>Print</button> */}

          <ul>
            {names.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
          <h1>{names}</h1>
        </fieldset>
      </>
    </div>
  );
}

export default App;
