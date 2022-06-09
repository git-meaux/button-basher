import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { countIncrement, setTarget } from "../store/game/slice";
import { startTimer, stopTimer } from "../store/timer/slice";
import { gameEnd, notGameEnd } from "../store/game/slice";

import { selectCount, selectTarget } from "../store/game/selector";
import { selectRunning } from "../store/timer/selector";
import { selectGameEnd } from "../store/game/selector";

import CountDown from "../components/CountDown";
import EndGame from "../components/EndGame";
import TransitionScreen from "../components/TransitionScreen";
import PostGameMenu from "../components/PostGameMenu";
import KeyPressers from "../components/KeyPressers";
import Timer from "../components/Timer";

import "./styles.css";
import bgm from "./sounds/lvl/dracula.mp3";

export default function BaseGame() {
  const gameRef = useRef();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const isRunning = useSelector(selectRunning);
  const gameEndState = useSelector(selectGameEnd);
  const target = useSelector(selectTarget);

  const goal = Math.round((count / target) * 100);

  useEffect(() => {
    dispatch(setTarget(80)); // set the keypress target onloading
    setTimeout(() => {
      dispatch(startTimer());
    }, 3000);
  }, []);

  return (
    <div className="basegame-container">
      <div className="game-titlebar">
        <h2>Attack!</h2>
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

      {!isRunning ? ( // HTML sound element
        ""
      ) : (
        <audio autoPlay loop id="playAudio">
          <source src={bgm} />
        </audio>
      )}

      {!gameEndState ? (
        <KeyPressers keys={["F", "J"]} />
      ) : (
        <>
          <EndGame /> <TransitionScreen /> <PostGameMenu />
        </>
      )}
      <Timer />
    </div>
  );
}
