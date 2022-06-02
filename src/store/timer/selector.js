export const selectTimer = (state) => state.timer;

export const selectRunning = (state) => state.timer.isRunning;

export const selectScore = (state) => state.timer.timeScore;
