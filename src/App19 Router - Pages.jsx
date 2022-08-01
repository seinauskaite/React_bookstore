import "./App.css";
import { useState } from "react";
import Paper from "./Componets/Paper";
import { monsters, monstersPerPage } from "./Data/monsters";
import { Route, Router, Link, BrowserRouter, Routes } from "react-router-dom";
import MonstersRoute from "./Componets/MonstersRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/:pageNow"}
            element={
              <MonstersRoute
                monsters={monsters}
                monstersPerPage={monstersPerPage}
              ></MonstersRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
