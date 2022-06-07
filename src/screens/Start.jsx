import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeScreen } from "../store/screen/slice";
// screens currently numbers, maybe change them to vars
import "./Start.css";
import start01 from "./sound/PressStart/start01.aac"

export default function StartScreen(){
    const dispatch = useDispatch()
    const [muted,setMuted] =useState(false)

    const Sound = () =>{
        const audio = new Audio(start01);
        audio.loop = false;
        audio.play();
    }

    const start = () =>{
        setMuted(true)
        Sound();
        setTimeout(dispatch(changeScreen(1)),1000); 
    }
    

    return <div className="StartScreen">
        <div onClick={()=> start() } className="ClickHere">Click Here To Start</div>
            
        {/* <iframe src={require("./sound/soundtrack.webm")} type="audio/webm" allow="autoplay" id="audio" style={{display:"none"}} ></iframe> */}
        {/* <button className={ muted ?"mute":"notmute" } onClick={(e)=> setMuted(!muted) } >something</button> */}
        <div className={ !muted ?"mute":"notmute" } onClick={()=>setMuted(!muted) } ><img alt="" src={require("./images/muted.png")} /></div>
        <audio autoPlay  loop id="playAudio" muted={muted}>
            <source src={require("./sound/soundtrack.webm")} type="audio/webm" />
        </audio>
    </div>
}