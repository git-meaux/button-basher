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
import "./sharkescape.css";
import bgm from "./sounds/lvl/bossFight.mp3";

export default function SharkEscape() {
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
    <div className="sharkescape-container">
      <div className="game-titlebar">
        <h2>ESCAPE!!</h2>
      </div>
      <CountDown />
      {/* <KeyPressers keys={["F", "J"]} /> */}
      {!isRunning ? ( // HTML sound element
        ""
      ) : (
        <audio autoPlay loop id="playAudio">
          <source src={bgm} />
        </audio>
      )}
      <div className="water-layer"> </div>
      <div className="shark">
        <img src={require("./images/shark.png")} alt="" />
      </div>
      <div className="flood-city"></div>
      <div
        className="boat"
        style={{ left: `${((820 - 300) / 100) * goal + 300}px` }}
      >
        <img src={require("./images/boat-red.png")} alt="" />
      </div>

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
