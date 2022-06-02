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
      state.target = action.payload;
    },
  },
});

export const { countIncrement, countReset, gameEnd, notGameEnd } =
  gameSlice.actions;

export default gameSlice.reducer;
