import React from "react";
import { useStateValue } from "../../state/stateProvider";
import { ticksToShortTime } from "../../utils";

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

const avg = arr => Math.floor(arr.reduce((p, c) => p + c, 0) / arr.length);

const calculateAverages = turnsWithRounds => {
  let averages = [];
  let turns = turnsWithRounds.map(turn => {
    return {
      playerId: turn.name,
      duration: turn.duration
    };
  });

  let durationMap = groupBy(turns, turn => turn.playerId);
  for (var key of durationMap.keys()) {
    let values = durationMap.get(key);
    console.log(values);
    let average = avg(values.map(elem => elem.duration));
    averages.push({ key: key, average: average });
  }

  return averages;
};

const Summary = () => {
  let [state] = useStateValue();
  let { turns } = state;

  const shortReduce = (shortestTurn, current) =>
    shortestTurn.duration < current ? shortestTurn : current;
  const shortestTurn = turns.reduce(shortReduce, { duration: -1 });
  const averages = calculateAverages(turns);

  let roundMap = groupBy(state.turns, turn => turn.round);
  console.log(roundMap);
  return (
    <div className="summary">
      <h1>Summary</h1>
      <p>
        Shortest Turn: R{shortestTurn.round}: {shortestTurn.name} -{" "}
        {ticksToShortTime(shortestTurn.duration)}{" "}
      </p>
      {averages.map((average, index) => (
        <p key={index}>
          Player: {average.key} AverageTurn: {ticksToShortTime(average.average)}
        </p>
      ))}
    </div>
  );
};

export default Summary;
