import { useState } from "react";

function ReForm() {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("1");
  const [checkbox, setCheckbox] = useState(0);
  const [radio, setRadio] = useState("1");
  const [range, setRange] = useState("0");

  const textChange = (e) => {
    setText(e.target.value);
  };

  const textareaChange = (e) => {
    setTextarea(e.target.value);
  };

  const selectChange = (e) => {
    setSelect(e.target.value);
  };

  const checkboxChange = () => {
    setCheckbox((c) => (c ? 0 : 1));
  };

  const radioChange = (e) => {
    setRadio(e.target.value);
  };

  const rangeChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <>
      <fieldset>
        <legend>TEXT</legend>
        <input type="text" onChange={textChange} value={text}></input>
      </fieldset>
      <fieldset>
        <legend>TEXTAREA</legend>
        <textarea onChange={textareaChange} value={textarea}></textarea>
      </fieldset>
      <fieldset>
        <legend>SELECT</legend>
        <select onChange={selectChange} value={select}>
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>CHECKBOX</legend>
        <input
          type="checkbox"
          onChange={checkboxChange}
          checked={checkbox}
        ></input>
      </fieldset>

      <fieldset>
        <legend>RADIO</legend>
        A1
        <input
          onChange={radioChange}
          type="radio"
          name="r"
          value="1"
          checked={radio === "1"}
        />
        A2
        <input
          onChange={radioChange}
          type="radio"
          name="r"
          value="2"
          checked={radio === "2"}
        />
        A3
        <input
          onChange={radioChange}
          type="radio"
          name="r"
          value="3"
          checked={radio === "3"}
        />
      </fieldset>

      <fieldset>
        <legend>RANGE</legend>
        <input type="range" onChange={rangeChange} value={range}></input>
      </fieldset>
    </>
  );
}

export default ReForm;
