import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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

import background from "./images/earth.png";
import drill from "./images/drill.png";
import hole from "./images/hole.png";

import "./styles.css";
import "./CoreDriller.css";
import bgm from "./sounds/lvl/deepr.mp3";

export default function CoreDriller() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const isRunning = useSelector(selectRunning);
  const gameEndState = useSelector(selectGameEnd);
  const target = useSelector(selectTarget);

  const goal = Math.round((count / target) * 100);

  useEffect(() => {
    dispatch(setTarget(240)); // set the keypress target onloading
    setTimeout(() => {
      dispatch(startTimer());
    }, 3000);
  }, []);
  return (
    <div className="core-driller-container">
      <div
        className="background"
        style={{ top: `${Math.round(1766 - (4570 / 100) * goal)}px` }}
      >
        <img alt="" src={background} />
      </div>
      <div className="game-titlebar">
        <h2>Drill To Center!</h2>
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
      <div
        className="driller"
        //   style={{ top: `${goal}px` }}
        style={{ top: `${Math.round((605 / 100) * goal)}px` }}
      >
        <img alt="" src={drill} />
      </div>
      <div className="hole" style={{ top: `${-321 + (605 / 100) * goal}px` }}>
        <img alt="" src={hole} />
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
