import { useEffect, useState } from "react";

function Local() {
  const [digit, setDigit] = useState(0);

  useEffect(() => {
    let d = localStorage.getItem("local");
    if (null === d) {
      localStorage.setItem("local", 0);
    }
    setDigit(localStorage.getItem("local"));
  }, []);

  const bu = () => {
    let d = localStorage.getItem("local");
    d++;
    localStorage.setItem("local", d);
    setDigit(d);
  };

  return (
    <div className="kvc">
      <button onClick={bu}>^=^</button>
      <div className="kv_big">
        <h1>{digit}</h1>
      </div>
    </div>
  );
}

export default Local;
