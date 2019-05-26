import React, { Component } from "react";
import { Link } from "react-router-dom";

import PlayerCard from "./PlayerCard";
import "./PlayerCard.scss";

class PlayerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersAdded: 0,
      players: []
    };
  }

  addPlayer = () => {
    let playersAdded = this.state.playersAdded + 1;
    this.setState({
      playersAdded: playersAdded,
      players: [
        ...this.state.players,
        {
          name: "",
          color: "#111111",
          id: playersAdded
        }
      ]
    });
  };

  removePlayer = id => {
    let players = this.state.players.filter(player => player.id !== id);

    this.setState({
      players: players
    });
  };

  changePlayerName = (id, name) => {
    this.setState({
      players: this.state.players.map(player => {
        if (player.id === id) {
          return { ...player, name: name };
        }

        return player;
      })
    });
  };

  render() {
    let players = this.state.players;

    return (
      <div className="playerSelect">
        <h1> Player Select </h1>
        {players.map((player, index) => (
          <PlayerCard
            name={player.name}
            color={player.color}
            id={player.id}
            key={index}
            onRemove={this.removePlayer}
            onNameChange={this.changePlayerName}
          />
        ))}
        <button onClick={this.addPlayer}>Add</button>
        <p>
          <Link to="/game">Start</Link>
        </p>
      </div>
    );
  }
}

export default PlayerSelect;
