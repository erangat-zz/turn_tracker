import React, { Component } from "react";
import "./App.scss";

import TurnTracker from "./components/turnTracker/TurnTracker";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-container">
          <TurnTracker />
        </div>
      </div>
    );
  }
}

export default App;
