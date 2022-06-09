export const selectTimer = (state) => state.timer;

export const selectRunning = (state) => state.timer.isRunning;

export const selectScore = (state) => state.timer.timeScore;

export const selectRecords = (state) => state.timer.records;
