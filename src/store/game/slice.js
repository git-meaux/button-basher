import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  endGame: false,
  target: 60,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    countIncrement: (state) => {
      // console.log("triggered countIncrement");
      state.count = state.count + 1;
    },
    countReset: (state) => {
      state.count = initialState;
    },
    gameEnd: (state) => {
      state.endGame = true;
    },
    notGameEnd: (state) => {
      state.endGame = false;
    },
    setTarget: (state, action) => {
      // console.log("setTarget: ", action.payload);
      state.target = action.payload;
    },
    gameReset: (state) => {
      return initialState;
    },
  },
});

export const {
  countIncrement,
  countReset,
  gameEnd,
  notGameEnd,
  setTarget,
  gameReset,
} = gameSlice.actions;

export default gameSlice.reducer;
