import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerComponent from "../player/PlayerComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Redux test</p>
        </header>
        <PlayerComponent />
      </div>
    );
  }
}

export default App;
