import { useEffect } from "react"
import { useSelector } from "react-redux"

import { selectGameEnd } from "../store/game/selector"
// get a timeStamp in selector

import "./EndGame.css"

export default function EndGame(){

  const gameEnd = useSelector(selectGameEnd);

    useEffect(()=>{

    },[gameEnd])
    
  return <div>
    {!gameEnd ? ""
      :
      <div className="EndGame">
        <h1>FINISHED</h1>
        <p>time</p>
        <h2>X.XXs</h2>
      </div>
    }
  </div>
}