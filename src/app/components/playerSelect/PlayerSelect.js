import React, { useState, useReducer } from "react";

import PlayerCard from "./PlayerCard";
import "./PlayerCard.scss";
import {
  playerReducer,
  ADD_PLAYER,
  REMOVE_PLAYER,
  RENAME_PLAYER
} from "./playerReducer";

const changePlayerName = (id, name) => {
  return;
};

function PlayerSelect(props) {
  let [state, dispatch] = useReducer(playerReducer, {
    playersAdded: 0,
    players: []
  });

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
          onNameChange={name =>
            dispatch({ type: RENAME_PLAYER, playerId: player.id, name: name })}
        />
      ))}
      <button onClick={() => dispatch({ type: ADD_PLAYER })}>Add</button>
      <p onClick={() => props.onNext()}>Start</p>
    </div>
  );
}

export default PlayerSelect;
