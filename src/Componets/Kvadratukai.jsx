import { Component } from "react";
import rand from "../Functions/rand";
import colors from "../Constants/colors";
import Kvadratukas from "../Componets/Kvadratukas";

class Kvadratukai extends Component {
  constructor() {
    super();
    this.state = { kv: [] }; /// nes nera pradzioj kvardratuku, tai tuscias masvyas
  }

  add = () => {
    const kvCopy = [...this.state.kv]; // todel kad negalim keist tiesiogiai
    for (let i = 0; i < 10; i++) {
      kvCopy.push({
        digit: rand(1, 10),
        color: rand(1, 3),
      });
    }
    this.setState({ kv: kvCopy });
  };

  sort = () => {
    const kvCopy = [...this.state.kv];
    kvCopy.sort((k1, k2) => {
      return k1.digit - k2.digit;
    });
    this.setState({ kv: kvCopy });
  };

  render() {
    return (
      <>
        <button onClick={this.add}>ADD kvadratukas</button>
        <button onClick={this.sort}>Sort</button>
        <div className="kvc">
          {this.state.kv.map((k, i) => (
            <Kvadratukas key={i} color={k.color} digit={k.digit}></Kvadratukas>
          ))}
        </div>
      </>
    );
  }
}

export default Kvadratukai;
