import { useState } from "react";

function PlusBlack({ i }) {
  const [d, setD] = useState(0);

  return (
    <div className="kv_big kv_11" key={i}>
      {d}
      <button className="btn" onClick={() => setD((x) => x + 1)}>
        +
      </button>
    </div>
  );
}

export default PlusBlack;
