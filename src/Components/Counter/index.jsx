import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countNumber: 0,
      symbol: true,
    };
  }

  addPoint = () => {
    if (this.state.symbol === false) {
      this.setState((prevState) => ({
        countNumber: prevState.countNumber - this.props.step,
      }));
    } else {
      this.setState((prevState) => ({
        countNumber: prevState.countNumber + this.props.step,
      }));
    }
  };

  changeSymbolMinus = () => {
    this.setState({
      symbol: false,
    });
  };

  changeSymbolPlus = () => {
    this.setState({
      symbol: true,
    });
  };

  render() {
    return (
      <main>
        <span>
          <button onClick={this.changeSymbolMinus}>Minus</button>
          <button onClick={this.addPoint}>Добавить</button>
          <button onClick={this.changeSymbolPlus}>Plus</button>
        </span>
        <div>{this.state.countNumber}</div>
      </main>
    );
  }
}

export default Counter;
