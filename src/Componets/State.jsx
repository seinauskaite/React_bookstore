import { Component } from "react";

class State extends Component {
  constructor(props) {
    super();
    this.state = { color: "red" };
  }

  ku = () => {
    if (this.state.color == "blue") {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "blue" });
    }
    // setTimeout(() => console.log(this.state.color), 1);
  };

  render() {
    return (
      <>
        <div
          style={{
            color: this.state.color,
          }}
        >
          {this.props.hello}
        </div>
        <button onClick={this.ku}>KU</button>
      </>
    );
  }
}

export default State;
