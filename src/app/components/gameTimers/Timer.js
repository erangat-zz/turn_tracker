import React from "react";
import "./timer.scss";
import { ticksToTime } from "../../utils";

function Timer(props) {
  return (
    <div className="timer" style={{ backgroundColor: props.color }}>
      <h2>
        {props.name} - {ticksToTime(props.ticks)}
      </h2>
      <div className="buttons">
        <button onClick={() => props.onStart()}> Start</button>
        <button onClick={() => props.onPause()}> Pause</button>
      </div>
    </div>
  );
}

export default Timer;
