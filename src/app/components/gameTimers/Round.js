import React from "react";
import "./round.scss";
function Round(props) {
  return (
    <div className="round">
      <h1> Round {props.roundNumber}</h1>
      <div className="buttons">
        <button onClick={() => props.onStart()}> Start Round</button>
        <button onClick={() => props.onEndGame()}> End Game</button>
      </div>
    </div>
  );
}

export default Round;
