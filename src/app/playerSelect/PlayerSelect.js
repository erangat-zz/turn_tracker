import React, { Component } from "react";
import { Link } from "react-router-dom";
class PlayerSelect extends Component {
  render() {
    return (
      <div className="playerSelect">
        <h1> Player Select </h1>
        <p>
          <Link to="/game">Start</Link>
        </p>
      </div>
    );
  }
}

export default PlayerSelect;
