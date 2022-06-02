
import { useSelector } from "react-redux"

import { selectGameEnd } from "../store/game/selector"

import "./TransitionScreen.css"

export default function TransitionScreen(){

    const gameEnd = useSelector(selectGameEnd);

    return <div 
        className="transition-screen"
        >{!gameEnd ? "":<div></div> }
         {/* <div></div>    */}
        </div>
}