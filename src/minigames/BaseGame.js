import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";

import { countIncrement } from "../store/game/slice";

export default function BaseGame() {
  const dispatch = useDispatch();

  const keyPressHandler = (event) => {
    console.log(`Key pressed: ${event.key}`);
    dispatch(countIncrement());
  };

  // document.addEventListener("keyup", keyPressHandler);

  // document.removeEventListener("keydown", keyPressHandler);
  useEffect(() => {
    // do something
    document.addEventListener("keyup", keyPressHandler);
    // dispatch keypress
  }, []);

  return (
    <div className="basegame-container">
      <h2>This base game</h2>
    </div>
  );
}
