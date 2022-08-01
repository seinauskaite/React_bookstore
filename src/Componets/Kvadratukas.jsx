import { Component } from "react";

class Kvadratukas extends Component {
  constructor() {
    super();
    this.state = { d: 0 };
  }

  componentDidMount() {
    const mas = ["Bebras", "Zebras"];
    const [a, b] = mas; //// sitas priskiria a - Bebras, o b - Zebras
    // const a = mas[0];      /// tas pats kas const [a, b] = mas
    // const b = mas[1];     /// tas pats kas const [a, b] = mas

    console.log("did mount", a, b);
    this.setState({ d: this.props.digit });
  }

  componentWillUnmount() {}

  escalate = () => {
    let d = this.state.d;
    d++;
    this.setState({ d: d });
  };

  render() {
    return (
      <div className={"kv kv_" + this.props.color} onClick={this.escalate}>
        {this.state.d}
      </div>
    );
  }
}

export default Kvadratukas;
