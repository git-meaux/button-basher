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
    },
    setScore: (state, action) => {
      console.log("time: ", action.payload);
      state.timeScore = action.payload;
    },
    resetScore: (state) => {
      return initialState;
    },
  },
});

export const { startTimer, stopTimer, setScore, resetScore } =
  timerSlice.actions;

export default timerSlice.reducer;
