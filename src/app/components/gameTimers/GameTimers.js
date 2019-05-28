import React, { useReducer, useEffect } from "react";
import { useStateValue } from "../../state/stateProvider";
import {
  timersReducer,
  TIMER_TICK,
  MAKE_TIMER_ACTIVE,
  PAUSE_TIMER
} from "../../reducers/timersReducer";

import Timer from "./Timer";

function GameTimers(props) {
  let [globalState] = useStateValue();
  let { players } = globalState;

  const initialState = {
    activeTimer: 0,
    timers: players.map((player, index) => ({
      color: player.color,
      ticks: 0
    })),
    isPaused: false,
    endRoundTimer: 0,
    isEndOfRound: false
  };

  const [state, dispatch] = useReducer(timersReducer, initialState);

  useEffect(
    () => {
      let interval;
      if (!state.isPaused) {
        interval = setInterval(() => dispatch({ type: TIMER_TICK }), 100);
      }
      return () => clearInterval(interval);
    },
    [state.isPaused]
  );

  return (
    <div className="GameTimers">
      <h1> Timers </h1>
      {state.isEndOfRound ? <Timer color="#ccc" /> : null}
      {state.timers.map((timer, index) => (
        <Timer
          key={index}
          id={index}
          color={timer.color}
          ticks={timer.ticks}
          onStart={() =>
            dispatch({
              type: MAKE_TIMER_ACTIVE,
              timerId: index
            })}
          onPause={() =>
            dispatch({
              type: PAUSE_TIMER,
              timerId: index
            })}
        />
      ))}
      <p onClick={() => props.onNext()}>Finish</p>
    </div>
  );
}

export default GameTimers;
