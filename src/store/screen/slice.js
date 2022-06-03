import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadScreen: false,
  screen: 0,
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
  },
});

export const { startLoading, changeScreen } = screenSlice.actions;

export default screenSlice.reducer;
