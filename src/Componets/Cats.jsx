import { useState } from "react";

function Cats() {
  const [cat, setCat] = useState("");
  const [catsList, setCatsList] = useState([]);
  const [catColor, setCatColor] = useState("");

  const addCat = (e) => {
    setCat(e.target.value);
  };

  const add = () => {
    setCatsList((c) => [...c, { cat: cat, catColor: catColor }]);
    setCat("");
  };

  return (
    <>
      <button onClick={add}>Add CAT</button>
      <fieldset>
        <legend>CAT</legend>
        <input type="text" type="text" onChange={addCat} value={cat}></input>

        <select onChange={(e) => setCatColor(e.target.value)} value={cat}>
          <option value="blue">blue</option>
          <option value="aquamarine">aquamarine</option>
          <option value="darkcein">darkcein</option>
        </select>
      </fieldset>
      <div className="kvc">
        {catsList.map((c, i) => {
          return (
            <div
              className="round"
              key={i}
              style={{
                width: c.cat.length * 14 + 10 + "px",
                height: c.cat.length * 14 + 10 + "px",
                background: c.catColor,
              }}
            >
              {c.cat}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cats;
