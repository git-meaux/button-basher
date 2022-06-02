export const selectCount = (state) => {
  //   console.log("count in selector", state.gameClick.count);
  return state.gameClick.count;
};
export const selectGameEnd = (state) => state.gameClick.endGame;
