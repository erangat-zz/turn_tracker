import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import PlayerSelect from "./playerSelect/PlayerSelect";
import GameTimers from "./gameTimers/GameTimers";
import Summary from "./summary/Summary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={PlayerSelect} />
          <Route path="/players" component={PlayerSelect} />
          <Route path="/game" component={GameTimers} />
          <Route path="/summary" component={Summary} />
        </Switch>
      </div>
    );
  }
}

export default App;
