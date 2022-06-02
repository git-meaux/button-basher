import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { countIncrement } from "../store/game/slice";
import { startTimer, stopTimer } from "../store/timer/slice";
import { gameEnd, notGameEnd } from "../store/game/slice";

import { selectCount } from "../store/game/selector";
import { selectRunning } from "../store/timer/selector";
import { selectGameEnd } from "../store/game/selector";
import { selectTarget } from "../store/game/selector";


import "./KeyPressers.css"

export default function KeyPressers(props){ // passing props-> keys={["X","Y","Z"]}
    const dispatch = useDispatch()
    const gameRef = useRef();
    const count = useSelector(selectCount);
    const isRunning = useSelector(selectRunning);
    const gameEndState = useSelector(selectGameEnd);
    const target = useSelector(selectTarget);

    const keys = props.keys;

    // string var should be passed
    // string var are placed in divs as keys graphics
    const keyPressHandler = (event) => {
        console.log(`Key pressed: ${event.key}`);

        // if (count < target && isRunning) {
        //   dispatch(countIncrement());
        // }
        // if (count >= target && !gameEndState) {
        //   dispatch(stopTimer());
        //   dispatch(gameEnd());
        // }
      };


    useEffect(()=>{
        gameRef.current.focus();
    },[])

    return <div className="KEYS"
    tabIndex={"0"}
    onKeyDown={keyPressHandler}
    ref={gameRef}
    >
        
    <p>PRESS:</p>
    <div 
    className="holder"
    
    >
        {keys.map((str,index) => (<div key={index} className="KEY">{str}</div>))}
    </div>
    
    </div>

}