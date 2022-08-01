import { useState } from "react";
import "./App.css";
import PlusBlack from "./Componets/PlusBlack";
import PlusBlacks from "./Componets/PlusBlacks";
import State1 from "./Componets/State1";
import State2 from "./Componets/State2";
import State3 from "./Componets/State3";
import State4 from "./Componets/State4";
import State5 from "./Componets/State5";
import Trees from "./Componets/Trees";

function App() {
  ///STATE 3 iskeltas kodas

  const [nr, setNr] = useState(0);

  const minus = () => {
    setNr(nr - 1);
  };
  const plus = () => {
    setNr(nr + 1);
  };

  return (
    <div className="App">
      <>
        <p>
          Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja
          apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į
          kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.
        </p>
        <State1></State1>
        <p>
          Sukurti aplikaciją, kuri turi mygtukus change ir random bei
          atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change
          mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o
          paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25
        </p>
        <State2></State2>
        <p>
          Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja
          skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus
          minus- sumažėja 3
        </p>
        <State3 plus={plus} minus={minus} nr={nr}></State3>
        <p>
          Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą
          atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.
        </p>

        <State4></State4>
        <p>
          Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset.
          Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue -
          mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus
          reset viskas išsitrina
        </p>
        <State5></State5>
        <p>
          Sukurti aplikaciją, atvaizduojančią žalią kvadratą (laukas) padalinta
          į tris stulpelius ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”.
          Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis
          kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai
          žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio
          pavadinimą.
        </p>
        <Trees></Trees>
        <p>
          Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką,
          atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje.
          Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi
          kvadratai, paspaudus 3 - atsirastų 3 ir t.t. Spaudant mygtuką “+”
          kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų
          vienetu (kiekviename kvadrate atskirai).
        </p>

        <PlusBlacks></PlusBlacks>
        <div style={{ height: "200px" }}></div>
      </>
    </div>
  );
}

export default App;
