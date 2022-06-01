import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";

import { countIncrement } from "../store/game/slice";
import { selectCount } from "../store/game/selector";

import "./styles.css";

export default function BaseGame() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const target = 20;

  const goal = Math.round((count / target) * 100);

  // console.log(count);

  const keyPressHandler = (event) => {
    // console.log(`Key pressed: ${event.key}`);
    // console.log(count, target);
    if (count < target) {
      dispatch(countIncrement());
    }
  };

  useEffect(() => {
    // do something?
  }, []);

  console.log("count", count);

  return (
    <div
      className="basegame-container"
      tabIndex={"0"}
      onKeyDown={keyPressHandler}
    >
      <h2>This base game</h2>
      <p>target reached:</p>
      <p>{goal}%</p>
    </div>
  );
}
