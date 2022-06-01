import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer/slice";
import screenReducer from "./screen/slice";
import gameReducer from "./game/slice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    screen: screenReducer,
    gameClick: gameReducer,
  },
});
