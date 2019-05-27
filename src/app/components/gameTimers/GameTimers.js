import React, { Component } from "react";

class GameTimers extends Component {
  render() {
    return (
      <div className="GameTimers">
        <h1> Game Timers </h1>
        <p onClick={() => this.props.onNext()}>Finish</p>
      </div>
    );
  }
}

export default GameTimers;
