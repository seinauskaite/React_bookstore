import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Tetazita from "./Componets/Tetazita";
import Monster from "./Componets/Monster";

export const monsters = [
  { id: 8, type: "Big Black" },
  { id: 74, type: "Long Tail Monster" },
  { id: 13, type: "Five Legs Freak" },
  { id: 99, type: "Invisible Small Rat" },
  { id: 1478, type: "Sweet White Kitty" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ROU-TER</h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/dramblys">Dramblys</Link>
          <Link to="/pingvinas">Pingvinas</Link>
          <Link to="/tetazita">Teta Zita</Link>
          <Link to="/tetazita2">Teta Zita 2</Link>
        </div>
        <h1>MONSTERS</h1>
        <div className="links">
          {monsters.map((m) => (
            <Link key={m.id} to={"/monsters/" + m.id + "/buuuu"}>
              {m.type}
            </Link>
          ))}
        </div>
      </div>

      <div className="kvc">
        <Routes>
          <Route path="/" element={<h1></h1>}></Route>
          <Route
            path="/dramblys"
            element={<h2 className="kv_big">Dramblys</h2>}
          ></Route>
          <Route
            path="/pingvinas"
            element={<h2 className="sq_big">Pingvinas</h2>}
          ></Route>

          <Route path="/tetazita" element={<h2>Teta Zita</h2>}></Route>
          <Route path="/tetazita2" element={<Tetazita></Tetazita>}></Route>

          <Route
            path="/monsters/:id/:buuuu"
            element={<Monster></Monster>}
          ></Route>

          <Route path="*" element={<h2>404 NOT FOUND</h2>}></Route>
        </Routes>
      </div>
      <div></div>
    </BrowserRouter>
  );
}

export default App;
