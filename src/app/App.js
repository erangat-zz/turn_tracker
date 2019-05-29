import React from "react";
import "./App.scss";

import TurnTracker from "./components/turnTracker/TurnTracker";
import StateProvider from "./state/stateProvider";
import { playerReducer, initialState } from "./reducers/playerReducer";

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <StateProvider initialState={initialState} reducer={playerReducer}>
          <TurnTracker />
        </StateProvider>
      </div>
    </div>
  );
};

export default App;
