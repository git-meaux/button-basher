import { useSelector } from "react-redux";
import { useEffect } from "react";

import { selectGame } from "../store/screen/selector";
import { selectRunning } from "../store/timer/selector";

import BaseGame from "../minigames/BaseGame";
import SharkEscape from "../minigames/SharkEscape";
import CoreDriller from "../minigames/CoreDriller"

import "./styles.css"
;

// goal: other games imported -> will need folder index.js later
// perhapse other "games" could be scenes


export default function GameScreen(){
    const isRunning = useSelector(selectRunning);
    const Game = [<BaseGame/>, <SharkEscape />, <CoreDriller />];
    const gameSelect = useSelector(selectGame);
    // rotate between games
    // later:  loading/ transition screen

    // useEffect keeps a check on Screen slice selector
    // other number, other game> new "component"
   
    return <div className="GameScreen" style={!isRunning?{ cursor:"default"}:{cursor:"none"}} >
        
        {Game[gameSelect]}
        {/* <BaseGame /> */}
        {/* <SharkEscape/> */}
    </div>
}