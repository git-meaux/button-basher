import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  timeScore: 0,
};

export const timerSlice = createSlice({
  name: "Time",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state, action) => {
      state.isRunning = false;
      state.timeScore = action.payload; // the payload is going to be the stopped time
    },
  },
});

export const { startTimer, stopTimer } = timerSlice.actions;

export default timerSlice.reducer;
