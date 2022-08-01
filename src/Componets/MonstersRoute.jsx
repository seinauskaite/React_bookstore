import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paper from "../Componets/Paper";

function MonstersRoute({ monsters, monstersPerPage }) {
  const [showMonster, setShowMonster] = useState([]);

  const { pageNow } = useParams(1);

  useEffect(() => {
    const start = (pageNow - 1) * monstersPerPage;
    const end = pageNow * monstersPerPage;
    setShowMonster(monsters.slice(start, end));
    console.log(start, end);
  }, [pageNow, monsters, monstersPerPage]);

  return (
    <>
      <div className="kvc">
        <div className="kvc">
          {showMonster.map((m) => (
            <div key={m.id} className="sq_big">
              {m.type}
            </div>
          ))}
        </div>
      </div>

      <Paper
        total={monsters.length}
        perPage={monstersPerPage}
        pageNow={pageNow}
      ></Paper>
    </>
  );
}

export default MonstersRoute;
