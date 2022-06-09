import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  timeScore: 0,
  records: [
    { name: "Paul", time: 500 },
    { name: "Jaws", time: 500 },
    { name: "Simon", time: 500 },
  ],
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
    setRecord: (state, action) => {
      const target = action.payload[0];
      const record = action.payload[1];
      state.records = [...state.records];
    },
  },
});

export const { startTimer, stopTimer, setScore, resetScore } =
  timerSlice.actions;

export default timerSlice.reducer;
