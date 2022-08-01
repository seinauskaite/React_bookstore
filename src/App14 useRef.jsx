import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  // Parsisiunčiam userius, rodom tik George ir Lindsay avatarus. Padarom mygtuką, kurį paspaudus rodo visus avatarus. DONE!

  const [users, setUsers] = useState([]);
  const masterUsers = useRef([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      masterUsers.current = res.data.data;
      setUsers(
        res.data.data.filter(
          (u) => u.first_name === "George" || u.first_name === "Lindsay"
        )
      );
    });
  }, []);

  const all = () => {
    setUsers(masterUsers.current);
  };

  const filter = () => {
    setUsers(
      masterUsers.current.filter(
        (u) => u.first_name === "George" || u.first_name === "Lindsay"
      )
    );
  };

  /// Atvaizduot userius, bet kol nėra ko atvaizduot, rodyti kokią nors loading animaciją toj vietoj DONE!

  const [del, setDel] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?delay=3").then((res) => {
      setDel(res.data.data);
    });
  }, []);

  //// Gauti userių listą su first ir last names ir padaryti mygtuką, kuris raudonai nuspalvintų Rachel ir Tobias DONE!

  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setNames(res.data.data);
    });
  }, []);

  return (
    <div className="App">
      <>
        {users.map((u) => (
          <img key={u.id} src={u.avatar}></img>
        ))}
        <button onClick={all}>all</button>
        <button onClick={filter}>2 only</button>

        <h1>Load</h1>

        {del.length ? (
          del.map((u) => <img key={u.id} src={u.avatar}></img>)
        ) : (
          <div className="lds-dual-ring"></div>
        )}

        <h2>LIST</h2>

        {names.map((n) => (
          <li key={n.id} className="black">
            {n.last_name} {n.first_name}
          </li>
        ))}
        <button>red</button>
      </>
    </div>
  );
}

export default App;
