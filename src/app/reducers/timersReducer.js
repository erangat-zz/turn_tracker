export const MAKE_TIMER_ACTIVE = "MAKE_TIMER_ACTIVE";
export const NEXT_TIMER = "NEXT_TIMER";
export const PAUSE_TIMER = "PAUSE_TIMER";
export const TIMER_TICK = "TIMER_TICK";

export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const UPDATE_PLAYER = "UPDATE_PLAYER";

export const initialState = {
  activeTimer: 0,
  timers: [],
  isPaused: false,
  endRoundTimer: 0,
  isEndOfRound: false
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

const removePlayer = (id, state) => {
  let players = state.players.filter(player => player.id !== id);

  return { ...state, players: players };
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
    default:
      return state;
  }
};
