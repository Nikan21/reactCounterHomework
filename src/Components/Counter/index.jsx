import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countNumber: 0,
      symbol: true,
    };

    this.autoClickID = null;
    this.timerStop = 2000;
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

  autoClick = () => {
    if (this.autoClickID === null) {
      this.autoClickID = setInterval(this.addPoint, 1000);
    }
  };

  stopAutoClick = () => {
    clearInterval(this.autoClickID);
    this.autoClickID = null;
  };

  componentDidMount() {
    this.autoClick();
    setTimeout(this.stopAutoClick, this.timerStop);
  }

  render() {
    return (
      <>
        <header>
          <h3>
            Автоклик после запуска прекратиться через: {this.timerStop / 1000}s
          </h3>
        </header>
        <main>
          <span>
            <button onClick={this.changeSymbolMinus}>Minus</button>
            <button onClick={this.addPoint}>Клик {this.props.step}</button>
            <button onClick={this.changeSymbolPlus}>Plus</button>
          </span>
          <div>{this.state.countNumber}</div>
          <div>
            <button onClick={this.autoClick}>AutoClick</button>
            <button onClick={this.stopAutoClick}>Stop AutoClick</button>
          </div>
        </main>
      </>
    );
  }
}

export default Counter;
