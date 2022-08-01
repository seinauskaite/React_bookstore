import "./App.css";
import Dogs from "./Componets/Dog";
import DogSquare from "./Componets/DogSquare";
import DogMix from "./Componets/DogMix";
import Dog4 from "./Componets/Dog4";
import Dog5 from "./Componets/Dog5";

const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

function App() {
  return (
    <div className="App">
      <>
        <p>Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.</p>
        <Dogs dogs={dogs}></Dogs>
        <p>
          Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys
          turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o
          apskritimai sunumeruoti nuo 1 iki galo.
        </p>
        <DogSquare dogs={dogs}></DogSquare>
        <p>
          Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis
          atvaizduoti kvadratuose, neporinius apskritime.
        </p>
        <DogMix dogs={dogs}></DogMix>
        <p>
          Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide
          praleisti (neatvaizduoti).
        </p>
        <Dog4 dogs={dogs}></Dog4>
        <p>
          Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių
          masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus
          raudonai.
        </p>
        <Dog5 dogs={dogs}></Dog5>
      </>
    </div>
  );
}

export default App;
