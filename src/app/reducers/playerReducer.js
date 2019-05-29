export const ADD_PLAYER = "ADD_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const SET_TURNS = "SET_TURNS";

export const initialState = {
  playersAdded: 2,
  players: [
    {
      name: "P1",
      color: "#FF0000",
      id: 1
    },
    {
      name: "P2",
      color: "#00FF00",
      id: 2
    }
  ],
  turns: []
};

const setTurns = (turns, state) => {
  console.log("setTurns");
  console.log(state);
  console.log(turns);

  return {
    ...state,
    turns: turns
  };
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

export const playerReducer = (state, action) => {
  console.log(action.type);
  console.log(state);

  switch (action.type) {
    case ADD_PLAYER:
      return addPlayer(state);
    case REMOVE_PLAYER:
      return removePlayer(action.playerId, state);
    case UPDATE_PLAYER:
      return updatePlayer(action.playerId, action.player, state);
    case SET_TURNS:
      return setTurns(action.turns, state);
    default:
      return state;
  }
};
