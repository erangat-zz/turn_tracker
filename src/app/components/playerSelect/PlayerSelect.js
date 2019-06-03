import React from "react";
import { useStateValue } from "../../state/stateProvider";

import PlayerCard from "./PlayerCard";
import "./PlayerCard.scss";
import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  UPDATE_PLAYER
} from "../../reducers/playerReducer";

function PlayerSelect(props) {
  let [state, dispatch] = useStateValue();

  let players = state.players;

  return (
    <div className="playerSelect">
      <h1> Player Select </h1>
      {players.map((player, index) => (
        <PlayerCard
          name={player.name}
          color={player.color}
          id={player.id}
          key={index}
          onRemove={() =>
            dispatch({ type: REMOVE_PLAYER, playerId: player.id })}
          onChange={updatedPlayer =>
            dispatch({
              type: UPDATE_PLAYER,
              playerId: player.id,
              player: updatedPlayer
            })}
        />
      ))}
      <div className="btn" onClick={() => dispatch({ type: ADD_PLAYER })}>
        Add
      </div>
      <div className="btn-bottom-big" onClick={() => props.onNext()}>
        Start
      </div>
    </div>
  );
}

export default PlayerSelect;
