import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  screen: 0,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { startLoading } = screenSlice.actions;

export default screenSlice.reducer;
