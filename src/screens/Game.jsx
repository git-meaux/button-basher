import { useSelector } from "react-redux";
import { useEffect } from "react";

import BaseGame from "../minigames/BaseGame";

// goal: other games imported
// perhapse oter "games" could be scenes


export default function GameScreen(){
    // rotate between games
    // later:  loading/ transition screen

    // useEffect keeps a check on Screen slice selector
    // other number, other game> new "component"
    useEffect(()=>{
        //
    })
    return <div className="GameScreen">
        <BaseGame />
    </div>
}