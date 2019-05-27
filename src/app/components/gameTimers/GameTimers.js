import React from "react";
import { useStateValue } from "../../state/stateProvider";
import Timer from "./Timer";

function GameTimers(props) {
  let [state, dispatch] = useStateValue();

  return (
    <div className="GameTimers">
      {state.players.map((player, index) => <Timer key={index} />)}
      <p onClick={() => this.props.onNext()}>Finish</p>
    </div>
  );
}

export default GameTimers;
