import React, { Component } from "react";
import { Link } from "react-router-dom";

import PlayerCard from "./PlayerCard";
import "./PlayerCard.scss";

class PlayerSelect extends Component {
  render() {
    return (
      <div className="playerSelect">
        <h1> Player Select </h1>
        <PlayerCard name="Player 1" color="#ff0000" />
        <PlayerCard name="Player 2" color="#00ff00" />
        <p>
          <Link to="/game">Start</Link>
        </p>
      </div>
    );
  }
}

export default PlayerSelect;
