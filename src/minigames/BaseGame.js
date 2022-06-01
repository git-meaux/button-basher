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

  const keyPressHandler = (event) => {
    // console.log(`Key pressed: ${event.key}`);

    if (count < target) {
      dispatch(countIncrement());
    }
  };

  useEffect(() => {
    // do something?
  }, []);

  return (
    <div
      className="basegame-container"
      tabIndex={"0"}
      onKeyDown={keyPressHandler}
    >
      <div className="game-titlebar">
        <h2>Destroy City</h2>
        {/* <p>target reached:</p>
        <p>{goal}%</p> */}
      </div>
      <div className="ship">
        <img alt="" src={require("./images/ufo.png")} />
      </div>

      <div
        className="thing"
        style={{
          height: `${((550 - 70) / 100) * goal}px`,
        }}
      ></div>
      <div className="city-L1">
        {/* <img alt="" src={require("./images/city01.png")} /> */}
      </div>
    </div>
  );
}
