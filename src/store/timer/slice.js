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
      // console.log("time: ", action.payload);
      state.timeScore = action.payload;
    },
    resetScore: (state) => {
      state.timeScore = 0;
      state.isRunning = false;
    },
    saveRecord: (state, action) => {
      // console.log("logging Record: ", action.payload);
      const target = action.payload[0];
      const name = action.payload[1];
      const record = action.payload[2];
      console.log({ target: target, name: name, record: record });
      // state.records = [...state.records];
      state.records[target] = { name: name, time: record };
    },
  },
});

export const { startTimer, stopTimer, setScore, resetScore, saveRecord } =
  timerSlice.actions;

export default timerSlice.reducer;
