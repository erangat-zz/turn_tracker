export const MAKE_TIMER_ACTIVE = "MAKE_TIMER_ACTIVE";
export const NEXT_TIMER = "NEXT_TIMER";
export const PAUSE_TIMER = "PAUSE_TIMER";
export const TIMER_TICK = "TIMER_TICK";
export const END_ROUND = "END_ROUND";
export const START_ROUND = "START_ROUND";
export const UPDATE_PLAYER = "UPDATE_PLAYER";

export const initialState = players => {
  return {
    activeTimer: 0,
    timers: players.map((player, index) => ({
      name: player.name,
      color: player.color,
      ticks: 0
    })),
    isPaused: true,
    endRoundTimer: 0,
    roundNumber: 1,
    isEndOfRound: true
  };
};
const startRound = state => {
  return { ...state, isEndOfRound: false };
};

const endRound = state => {
  return {
    ...state,
    roundNumber: state.roundNumber + 1,
    isEndOfRound: true,
    isPaused: true
  };
};

const makeTimerActive = (timerId, state) => {
  return {
    ...state,
    activeTimer: timerId,
    isPaused: false
  };
};

const nextTimer = state => {
  const numberOfTimers = state.timers.length;
  const nextTimer = state.activeTimer + 1 % numberOfTimers;
  return { ...state, activeTimer: nextTimer };
};

const pauseTimer = state => {
  return { ...state, isPaused: true };
};

const tickTimer = state => {
  if (state.isEndOfRound) {
    return { ...state, endRoundTimer: state.endRoundTimer + 1 };
  }

  let updatedTimers = [...state.timers];
  updatedTimers[state.activeTimer].ticks++;

  return {
    ...state,
    timers: updatedTimers
  };
};

const updatePlayer = (id, updatedPlayer, state) => {
  return {
    ...state,
    players: state.players.map(player => {
      if (player.id === id) {
        return updatedPlayer;
      }

      return player;
    })
  };
};

export const timersReducer = (state, action) => {
  switch (action.type) {
    case MAKE_TIMER_ACTIVE:
      return makeTimerActive(action.timerId, state);
    case NEXT_TIMER:
      return nextTimer(state);
    case PAUSE_TIMER:
      return pauseTimer(state);
    case TIMER_TICK:
      return tickTimer(state);
    case UPDATE_PLAYER:
      return updatePlayer(action.playerId, action.player, state);
    case START_ROUND:
      return startRound(state);
    case END_ROUND:
      return endRound(state);
    default:
      return state;
  }
};
