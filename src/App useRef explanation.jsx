import { useEffect, useReducer, useState, useRef } from "react";
import "./App.css";

function App() {
  const [c, setC] = useState(0);

  // let count = 123;

  const count = useRef(123);

  const green = useRef();
  const focus = useRef();

  const go = () => {
    {
      console.log(++count.current);
    }
  };

  const goC = () => {
    console.log(c + 1);
    setC((a) => a + 1);
  };

  const gogreen = () => {
    // document.querySelector("#h2").style.color = "green";
    green.current.style.color = "green";
  };

  useEffect(() => {
    focus.current.focus();
  });

  return (
    <div className="App">
      <>
        <h2>Use Ref</h2>
        <h5>let {count.current}</h5>
        <h5>state {c}</h5>

        <button onClick={go}>ADD</button>
        <button onClick={goC}>ReRender</button>

        {/* <button onClick={() => setC((a) => a + 1)}>ReRender</button> */}

        <button onClick={gogreen}>GREEN</button>
        <h2 ref={green}>wanna be green</h2>

        <h5>Input focus MIDDLE</h5>

        <input type="text"></input>
        <input type="text" ref={focus}></input>
        <input type="text"></input>
      </>
    </div>
  );
}

export default App;
