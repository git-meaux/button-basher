import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { selectGame } from "../store/screen/selector";
import { changeGame } from "../store/screen/slice";
import { changeScreen } from "../store/screen/slice";

import "./styles.css"
import start03 from "./sound/PressStart/start03.aac"

export default function Menu(){
    const dispatch =useDispatch();
    const gameSelect= useSelector(selectGame)
    const [choice, setChoice] =useState(0)

    const onOptionChange = e => {
        dispatch(changeGame(parseInt(e.target.value)))
        // setChoice(parseInt(e.target.value))
    }

    const Sound = () =>{
        const audio = new Audio(start03);
        audio.loop = false;
        audio.play();
    }
      
    const start = () =>{
        Sound();
        setTimeout(()=>dispatch(changeScreen(2)),700); 
    }

    return <div className="menu-screen">
        <h2>Game Select</h2>
        <div className="game">
            <input name="select" label="Alien Visitor" type="radio" value={0} checked={gameSelect===0}onChange={onOptionChange}></input>
            <input name="select" label="Shark Bait" type="radio" value={1} checked={gameSelect===1} onChange={onOptionChange}></input>
            <input name="select" label="To The Core" type="radio" value={2} checked={gameSelect===2}onChange={onOptionChange}></input>
        
        </div>

        {/* <div class="radio">
            <input label="Yes" type="radio" id="male" name="gender" value="male" checked/>
            <input label="No" type="radio" id="female" name="gender" value="female"/>
            <input label="I hate making decisions 🤷🏻‍♂️" type="radio" id="other" name="gender" value="other"/>
        </div>        */}
        <div onClick={()=>start()} className="start">Start</div>
    </div>
}