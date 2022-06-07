import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadScreen: false,
  screen: 0,
  game: 0,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    changeScreen: (state, action) => {
      state.screen = action.payload;
    },
    changeGame: (state, action) => {
      state.game = action.payload;
    },
  },
});

export const { startLoading, changeScreen, changeGame } = screenSlice.actions;

export default screenSlice.reducer;
