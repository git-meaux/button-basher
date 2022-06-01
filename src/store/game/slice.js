import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    countIncrement: (state) => {
      console.log("triggered countIncrement");
      state.count = state.count + 1;
    },
    countReset: (state) => {
      state.count = initialState;
    },
  },
});

export const { countIncrement, countReset } = gameSlice.actions;

export default gameSlice.reducer;
