import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeScreen } from "../store/screen/slice";
// screens currently numbers, maybe change them to vars
import "./Start.css";
import start01 from "./sound/PressStart/start01.aac"
import start02 from "./sound/PressStart/start02.aac"
import start03 from "./sound/PressStart/start03.aac"
import start04 from "./sound/PressStart/start04.aac"
import start05 from "./sound/PressStart/start05.aac"

import intro01 from "./sound/soundtrack.webm"
import intro02 from "./sound/intro.mp3"
import intro03 from "./sound/intro03.mp3"

const rndInt = (min, max) => Math.round(Math.random() * (max - min + 1) + min);

export default function StartScreen(){
    const tracks = [intro01,intro02,intro03];
    const startVar = [start01,start02,start03,start04,start05]

    const dispatch = useDispatch()
    const [muted,setMuted] =useState(false)

    const Sound = () =>{
        const audio = new Audio(startVar[rndInt(0,4)]);
        audio.loop = false;
        audio.play();
    }
    

    const start = () =>{
        setMuted(true)
        Sound();
        setTimeout(()=>dispatch(changeScreen(1)),1000); 
    }
    

    return <div className="StartScreen"  >
        <div onClick={()=> start() } className="ClickHere">Click Here To Start</div>
            
        {/* <iframe src={require("./sound/soundtrack.webm")} type="audio/webm" allow="autoplay" id="audio" style={{display:"none"}} ></iframe> */}
        {/* <button className={ muted ?"mute":"notmute" } onClick={(e)=> setMuted(!muted) } >something</button> */}
        <div className={ !muted ?"mute":"notmute" } onClick={()=>setMuted(!muted) } ><img alt="" src={require("./images/muted.png")} /></div>
        <audio autoPlay  loop id="playAudio" muted={muted}>
            <source src={tracks[rndInt(0,2)]}  />
        </audio>
    </div>
}