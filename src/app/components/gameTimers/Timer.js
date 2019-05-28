import React, { useState, useEffect } from "react";
import "./timer.scss";
function Timer(props) {
  return (
    <div className="timer" style={{ backgroundColor: props.color }}>
      <h1>
        Id:{props.id} - {props.ticks}
      </h1>
      <div className="buttons">
        <button onClick={() => props.onStart()}> Start</button>
        <button onClick={() => props.onPause()}> Pause</button>
      </div>
    </div>
  );
}

export default Timer;
