import { useState } from "react";

function D() {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);

  const [color1, setColor1] = useState("transparent");
  const [color2, setColor2] = useState("transparent");

  const handleInput1 = () => {
    setCheckbox1((c) => !c);
  };
  const handleInput2 = () => {
    setCheckbox2((c) => !c);
  };

  const show1 = () => {
    if (!checkbox1) {
      setColor1("transparent");
    } else setColor1("blue");
  };

  const show2 = () => {
    if (!checkbox2) {
      setColor2("transparent");
    } else setColor2("green");
  };

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", background: color1 }}
        onChange={show1}
      >
        <input
          className="center"
          type="checkbox"
          onChange={handleInput1}
          checked={checkbox1}
        ></input>
      </div>
      <div
        style={{ width: "100px", height: "100px", background: color2 }}
        onChange={show2}
      >
        <input
          className="center"
          type="checkbox"
          onChange={handleInput2}
          checked={checkbox2}
        ></input>
      </div>
    </>
  );
}

export default D;
