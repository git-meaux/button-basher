import { useEffect } from "react"
import { useSelector } from "react-redux"

import { selectGameEnd } from "../store/game/selector"
import { selectScore } from "../store/timer/selector"

import finish from "../minigames/sounds/finish.wav"

// get a timeStamp in selector

import "./EndGame.css"

export default function EndGame(){
  
  const Sound = () =>{
    const audio = new Audio(finish);
    audio.loop = false;
    audio.play();
}

  const gameEnd = useSelector(selectGameEnd);
  const score = useSelector(selectScore);

    useEffect(()=>{
      Sound();
    },[])
    
  return <div>
    {!gameEnd ? ""
      :
      <div className="EndGame"  > 
        {/* <audio autoPlay >
            <source src={finish} type="audio/wav" />
        </audio> */}
        <h1>FINISHED</h1>
        <p>time</p>
        <h2>{score} sec</h2>
      </div>
    }
  </div>
}