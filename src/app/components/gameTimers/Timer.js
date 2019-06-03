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
        <i className="fa fa-play-circle-o" onClick={() => props.onStart()} />
        <i className="fa fa-pause-circle-o" onClick={() => props.onPause()} />
      </div>
    </div>
  );
}

export default Timer;
