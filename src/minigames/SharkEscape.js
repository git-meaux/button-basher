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

export default function SharkEscape() {
  return (
    <div className="sharkescape-container">
      <div className="game-titlebar">
        <h2>ESCAPE!!</h2>
      </div>
      <CountDown />
      <div className="water-layer"></div>
      <div className="shark">
        <img src={require("./images/shark.png")} alt="" />
      </div>
      <div className="flood-city"></div>
      <div className="boat">
        <img src={require("./images/boat-red.png")} alt="" />
      </div>
    </div>
  );
}
