import { useContext } from "react";
import SenelioZinios from "../Contexts/SenelioZinios";

function Vaikas() {
  const sz = useContext(SenelioZinios);

  return (
    <div className="line">
      <h1>Va: {sz}</h1>
      {/* <SenelioZinios.Consumer>
      {(v) => <h1>
      Va: {v}
      </h1>}
      </SenelioZinios.Consumer> */}
    </div>
  );
}

export default Vaikas;
