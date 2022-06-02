import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useRef } from "react";

import { countIncrement } from "../store/game/slice";
import { startTimer, stopTimer } from "../store/timer/slice";
import { gameEnd, notGameEnd } from "../store/game/slice";

import { selectCount } from "../store/game/selector";
import { selectRunning } from "../store/timer/selector";
import { selectGameEnd } from "../store/game/selector";

import CountDown from "../components/CountDown";
import EndGame from "../components/EndGame";
import TransitionScreen from "../components/TransitionScreen";
import PostGameMenu from "../components/PostGameMenu";

import "./styles.css";

export default function BaseGame() {
  const gameRef = useRef();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const isRunning = useSelector(selectRunning);
  const gameEndState = useSelector(selectGameEnd);
  const target = 60;

  const goal = Math.round((count / target) * 100);

  const keyPressHandler = (event) => {
    // console.log(`Key pressed: ${event.key}`);
    if (count < target) {
      dispatch(countIncrement());
    }
    if (count >= target) {
      dispatch(stopTimer());
      dispatch(gameEnd());
    }
  };

  useEffect(() => {
    // do something?
    gameRef.current.focus();
    setTimeout(() => {
      dispatch(startTimer());
    }, 3000);
  }, []);

  return (
    <div
      className="basegame-container"
      tabIndex={"0"}
      onKeyDown={keyPressHandler}
      ref={gameRef}
    >
      <div className="game-titlebar">
        <h2>Attack!</h2>
        {/* <p>target reached:</p>
        <p>{goal}%</p> */}
      </div>
      <CountDown />
      <div className="ship">
        <img alt="" src={require("./images/ufo.png")} />
      </div>
      <div
        className="thing"
        style={{
          height: `${((550 - 70) / 100) * goal}px`,
        }}
      ></div>
      <div className="city-front">
        <img alt="" src={require("./images/city00.png")} />
      </div>
      <div className="city-L1"> </div>
      {count !== target ? (
        ""
      ) : (
        <div className="explosion">
          <img alt="" src={require("./images/beam.png")} />
        </div>
      )}

      {!gameEndState ? (
        ""
      ) : (
        <>
          {" "}
          <EndGame /> <TransitionScreen /> <PostGameMenu />{" "}
        </>
      )}
    </div>
  );
}
