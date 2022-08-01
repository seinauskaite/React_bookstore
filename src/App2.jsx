import "./App.css";
import Africa from "./Componets/Africa";
import PonasPropsas from "./Componets/PonasPropsas";
import Auto from "./Componets/Auto";
import BlueRed from "./Componets/BlueRed";

function App() {
  return (
    <div className="App">
      <PonasPropsas color="pink" size="20px"></PonasPropsas>
      <PonasPropsas color="blue" size="35px"></PonasPropsas>
      <Africa animal="zirafa" color="green" text="buerge"></Africa>
      <Africa animal="krokodilas" color="yellow" text=":)))"></Africa>
      <Auto maker="Volvo" color="aqua"></Auto>
      <Auto maker="Opel" color="yellow"></Auto>
      <Auto maker="Kamaz" color="aqua"></Auto>
      <BlueRed color="B"></BlueRed>
      <BlueRed color="R"></BlueRed>
      <BlueRed color="C"></BlueRed>
    </div>
  );
}

export default App;
