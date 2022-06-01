import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const gameSlice = createSlice({
  initialState,
  reducers: {
    countIncrement: (state) => {
      state.count = state.count + 1;
    },
    countReset: (state) => {
      state.count = initialState;
    },
  },
});

export const { countIncrement, countReset } = gameSlice.actions;

export default gameSlice.reducer;
