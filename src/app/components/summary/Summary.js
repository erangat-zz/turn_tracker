import React from "react";
import { useStateValue } from "../../state/stateProvider";
import { ticksToTime, ticksToShortTime } from "../../utils";

const avg = arr => Math.floor(arr.reduce((p, c) => p + c, 0) / arr.length);
const sum = arr => arr.reduce((p, c) => p + c, 0);

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

const calculatePlayerTurnAverages = turns => {
  var playerTurns = groupBy(turns, turn => turn.name);
  const playerAverages = [];

  for (var key of playerTurns.keys()) {
    let currentTurns = playerTurns
      .get(key)
      .map(playerTurn => playerTurn.duration);

    let playerAverage = Math.floor(avg(currentTurns));
    playerAverages.push({ player: key, average: playerAverage });
  }

  return playerAverages;
};

const calculateTotals = (turns, groupByPicker, totalByPicker) => {
  var groupedTurns = groupBy(turns, turn => groupByPicker(turn));
  const totals = [];

  for (var key of groupedTurns.keys()) {
    let currentTurns = groupedTurns.get(key).map(turn => totalByPicker(turn));
    let total = sum(currentTurns);
    totals.push({ key: key, total: total });
  }

  return totals;
};

const calculateRoundTotals = turns =>
  calculateTotals(turns, turn => turn.round, turn => turn.duration);
const calculatePlayerTurnTotals = turns =>
  calculateTotals(turns, turn => turn.name, turn => turn.duration);
const minTurnReducer = (currentMin, current) =>
  currentMin.duration < current.duration ? currentMin : current;

const Summary = () => {
  let [state] = useStateValue();
  let { turns } = state;

  var totalDuration = sum(turns.map(turn => turn.duration));
  var playerTurns = turns.filter(turn => turn.name !== "Setup");

  const shortestTurn = playerTurns.reduce(minTurnReducer, {
    duration: 10000
  });

  const averages = calculatePlayerTurnAverages(playerTurns);
  const roundTotals = calculateRoundTotals(turns);
  const playerTotals = calculatePlayerTurnTotals(playerTurns);
  console.log(playerTotals);

  return (
    <div className="summary">
      <h1>Summary</h1>
      <h2> Total Duration </h2>
      <p> {ticksToTime(totalDuration)}</p>
      <h2> Shortest Turn </h2>
      <p>
        Shortest Turn: R{shortestTurn.round}: {shortestTurn.name} -{" "}
        {ticksToShortTime(shortestTurn.duration)}{" "}
      </p>
      <h2> Player Average </h2>
      {averages.map((average, index) => (
        <p key={index}>
          Player: {average.key} AverageTurn: {ticksToShortTime(average.average)}
        </p>
      ))}
      <h2>Player totals</h2>
      {playerTotals.map((playerTotal, index) => (
        <p key={index}>
          Round: {playerTotal.key}, Total: {ticksToTime(playerTotal.total)}
        </p>
      ))}
      <h2>Round totals</h2>
      {roundTotals.map((roundTotal, index) => (
        <p key={index}>
          Round: {roundTotal.key}, Total: {ticksToTime(roundTotal.total)}
        </p>
      ))}
    </div>
  );
};

export default Summary;
