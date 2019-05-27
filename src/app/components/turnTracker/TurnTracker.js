import React, { useState } from "react";

import PlayerSelect from "../playerSelect/PlayerSelect";
import GameTimers from "../gameTimers/GameTimers";
import Summary from "../summary/Summary";

function TurnTracker() {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <PlayerSelect onNext={next} />;
    case 2:
      return <GameTimers onNext={next} />;
    case 3:
      return <Summary />;
    default:
      return null;
  }
}

export default TurnTracker;
