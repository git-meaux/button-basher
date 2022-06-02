import { useEffect } from "react"
import { useSelector } from "react-redux"

import { selectGameEnd } from "../store/game/selector"

import "./TransitionScreen.css"

export default function TransitionScreen(){

    const gameEnd = useSelector(selectGameEnd);

    useEffect(()=>{

    },[gameEnd])

    return <div 
        className="transition-screen"
        >{!gameEnd ? "":<div></div> }
         {/* <div></div>    */}
        </div>
}