import "./PostGameMenu.css"

import { useDispatch, useSelector } from "react-redux"
import { changeScreen } from "../store/screen/slice";
import { gameReset } from "../store/game/slice";
import { resetScore } from "../store/timer/slice";

export default function PostGameMenu(){
    const dispatch = useDispatch()

    const backToMain =()=>{
        dispatch(gameReset());
        dispatch(resetScore());
        dispatch(changeScreen(0));
    }

    return <div className="postgame-menu">
        
        <div onClick={()=>backToMain()} className="post-select">Startscreen</div>
        <div className="post-select">Replay</div>
        <div>Next Game</div>
    </div>
}