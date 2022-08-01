import { useParams } from "react-router-dom";
import { monsters } from "../App";

function Monster() {
  const { id } = useParams();

  console.log(id);

  return (
    <div className="kvc">{monsters.filter((m) => id == m.id)[0].type}</div>
  );
}

export default Monster;
