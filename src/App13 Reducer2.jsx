import { useEffect, useReducer } from "react";
import usersReducer from "./Reducers/usersReducer";
import {
  getUsersFromServer,
  sortUsersYA,
  sortUsersAY,
  byZip,
} from "./Actions/users";
import axios from "axios";
import "./App.css";

function App() {
  const [users, dispachUsers] = useReducer(usersReducer, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispachUsers(getUsersFromServer(res.data)));
  }, []);

  return (
    <div className="App">
      <>
        <button onClick={() => dispachUsers(sortUsersAY())}>A-Z</button>
        <button onClick={() => dispachUsers(sortUsersYA())}>Z-A</button>

        <button onClick={() => dispachUsers(byZip(1))}>ZIP A-Y</button>
        <button onClick={() => dispachUsers(byZip(-1))}>ZIP Y-A</button>

        <div></div>
        <label>NAMES from API</label>
        <ul>
          {users.map((u) => (
            <ul key={u.id}>
              <b>{u.address.zipcode}</b> {u.name}
            </ul>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
