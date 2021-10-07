import Counter from "./Components/Counter/index";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  handleChange = (event) => {
    const {
      target: { value: step },
    } = event;

    this.setState({ step: Number(step) });
  };

  render() {
    return (
      <div>
        <div className="App">
          <Counter step={this.state.step} />
          <div>
            <input
              type="range"
              name="step"
              value={this.step}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
