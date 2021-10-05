import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countNumber: 0,
    };
  }

  addPoint = () => {
    this.setState((prevState) => ({
      countNumber: prevState.countNumber + 1,
    }));
    console.log(this.state.countNumber);
  };

  render() {
    return (
      <main>
        <button onClick={this.addPoint}>Добавить</button>
        <div>{this.state.countNumber}</div>
      </main>
    );
  }
}

export default Counter;
