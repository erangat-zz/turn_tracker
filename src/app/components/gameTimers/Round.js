import React from "react";
import { ticksToTime } from "../../utils";
import "./round.scss";

function Round(props) {
  return (
    <div className="round">
      <h1> Round {props.roundNumber}</h1>
      <h2>{ticksToTime(props.roundTimer)}</h2>
      <div className="buttons">
        <div className="btn" onClick={() => props.onStart()}>
          {" "}
          Start Round
        </div>
        <div className="btn" onClick={() => props.onEndGame()}>
          {" "}
          End Game
        </div>
      </div>
    </div>
  );
}

export default Round;
