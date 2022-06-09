import "./PostGameMenu.css"

import { useDispatch, useSelector } from "react-redux"
import { changeScreen, changeGame } from "../store/screen/slice";
import { gameReset } from "../store/game/slice";
import { resetScore } from "../store/timer/slice";
import { selectGame } from "../store/screen/selector";

export default function PostGameMenu(){
    const dispatch = useDispatch();
    const gameSelect = useSelector(selectGame);


    const backToMain =()=>{
        dispatch(gameReset());
        dispatch(resetScore());
        dispatch(changeScreen(0));
    }
    const backToMenu =()=>{
        dispatch(gameReset());
        dispatch(resetScore());
        dispatch(changeScreen(1));
    }

    const nextGame =()=>{
        if (gameSelect===0){
            dispatch(gameReset());
            dispatch(resetScore());
            dispatch(changeGame(1))
        }
        if (gameSelect===1){
            dispatch(gameReset());
            dispatch(resetScore());
            dispatch(changeGame(2))
        }
        if (gameSelect===2){
            dispatch(gameReset());
            dispatch(resetScore());
            dispatch(changeGame(0))}
            
    }

    return <div className="postgame-menu">
        
        <div onClick={()=>backToMain()} className="post-select">Startscreen</div>
        <div onClick={()=>backToMenu()} className="post-select">Select Game</div>
        <div onClick={()=>nextGame()} className="post-select">Next Game</div>
    </div>
}