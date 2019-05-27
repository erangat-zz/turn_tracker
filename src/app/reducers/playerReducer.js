export const ADD_PLAYER = "ADD_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const RENAME_PLAYER = "RENAME_PLAYER";
export const initialState = {
  playersAdded: 0,
  players: []
};

const addPlayer = state => {
  const playersAdded = state.playersAdded + 1;
  const updatedPlayers = [
    ...state.players,
    {
      name: "",
      color: "#111111",
      id: playersAdded
    }
  ];

  return {
    ...state,
    players: updatedPlayers,
    playersAdded: playersAdded
  };
};

const renamePlayer = (id, name, state) => {
  return {
    ...state,
    players: state.players.map(player => {
      if (player.id === id) {
        return { ...player, name: name };
      }

      return player;
    })
  };
};

const removePlayer = (id, state) => {
  let players = state.players.filter(player => player.id !== id);

  return { ...state, players: players };
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return addPlayer(state);
    case REMOVE_PLAYER:
      return removePlayer(action.playerId, state);
    case RENAME_PLAYER:
      return renamePlayer(action.playerId, action.name, state);
    default:
      return state;
  }
};
