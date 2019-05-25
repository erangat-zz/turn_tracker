import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameTimers extends Component {
  render() {
    return (
      <div className="GameTimers">
        <h1> Game Timers </h1>
        <p>
          <Link to="/summary">Finish</Link>
        </p>
      </div>
    );
  }
}

export default GameTimers;
