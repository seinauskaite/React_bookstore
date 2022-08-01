import { useState } from "react";

function State4() {
  const [sq, setSq] = useState([1]);

  const addMore = () => {
    let sqCopy = [...sq];
    sqCopy.push("1");
    setSq(sqCopy);
  };

  return (
    <>
      <button onClick={addMore}>ADD</button>
      <div className="kvc">
        {sq.map((kv, i) => (
          <div key={i} className="kv_big">
            {kv}
          </div>
        ))}
      </div>
    </>
  );
}

export default State4;
