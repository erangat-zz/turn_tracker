import React, { useReducer, useEffect } from "react";
import { useStateValue } from "../../state/stateProvider";
import {
  timersReducer,
  initialState,
  TIMER_TICK,
  MAKE_TIMER_ACTIVE,
  PAUSE_TIMER,
  START_ROUND,
  END_ROUND
} from "../../reducers/timersReducer";

import { SET_TURNS } from "../../reducers/playerReducer";

import Timer from "./Timer";
import Round from "./Round";

function GameTimers(props) {
  let [globalState, globalDispatch] = useStateValue();
  let { players } = globalState;

  const [state, dispatch] = useReducer(timersReducer, initialState(players));

  useEffect(
    () => {
      let interval;
      if (state.isEndOfRound || !state.isPaused) {
        interval = setInterval(() => dispatch({ type: TIMER_TICK }), 100);
      }
      return () => clearInterval(interval);
    },
    [state.isPaused, state.isEndOfRound]
  );

  const onEndGame = () => {
    console.log("onEndGame");
    console.log(state);

    globalDispatch({
      type: SET_TURNS,
      turns: state.turns
    });
    props.onNext();
  };

  return (
    <React.Fragment>
      <h1>Game in Progress</h1>
      <div className="gameTimers">
        {state.isEndOfRound ? (
          <Round
            roundNumber={state.roundNumber}
            onStart={() =>
              dispatch({
                type: START_ROUND
              })}
            onEndGame={onEndGame}
          />
        ) : (
          <React.Fragment>
            {state.timers.map((timer, index) => (
              <Timer
                key={index}
                id={index}
                color={timer.color}
                ticks={timer.ticks}
                name={timer.name}
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
            <p
              className="btn-bottom-big"
              onClick={() =>
                dispatch({
                  type: END_ROUND
                })}
            >
              EndRound
            </p>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default GameTimers;
