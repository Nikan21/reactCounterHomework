import Counter from "./Components/Counter/index";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <Counter step = {this.state.step}/>
        </div>
      </div>
    );
  }
}
