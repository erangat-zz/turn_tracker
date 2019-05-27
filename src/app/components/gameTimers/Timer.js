import React, { useState, useEffect } from "react";

function Timer(props) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(
    () => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => setTime(time + 1), 100);
      }
      return () => clearInterval(interval);
    },
    [isRunning, time]
  );

  return (
    <div>
      <h1> {time} </h1>
      <button onClick={() => setIsRunning(!isRunning)}> Toggle</button>
    </div>
  );
}

export default Timer;
