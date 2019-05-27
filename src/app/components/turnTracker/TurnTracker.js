import React, { Component } from "react";

import PlayerSelect from "../playerSelect/PlayerSelect";
import GameTimers from "../gameTimers/GameTimers";
import Summary from "../summary/Summary";

class TurnTracker extends Component {
  state = {
    step: 1
  };

  next = () => {
    this.setState({ step: this.state.step + 1 });
  };

  previous = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handle;
  render() {
    let { step } = this.state;

    switch (step) {
      case 1:
        return <PlayerSelect onNext={this.next} />;
      case 2:
        return <GameTimers onNext={this.next} />;
      case 3:
        return <Summary />;
      default:
        return null;
    }
  }
}

export default TurnTracker;
