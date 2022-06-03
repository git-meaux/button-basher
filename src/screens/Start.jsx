import { useState } from "react";
import "./Start.css";
export default function StartScreen(){
    const [muted,setMuted] =useState(false)

    return <div className="StartScreen">
        <div className="ClickHere">Click Here To Start</div>
        {/* <iframe src={require("./sound/soundtrack.webm")} type="audio/webm" allow="autoplay" id="audio" style={{display:"none"}} ></iframe> */}
        <div className={ muted ?"mute":"notmute" } onClick={()=>setMuted(!muted) } ><img alt="" src={require("./images/muted.png")} /></div>
        <audio autoPlay loop id="playAudio" muted={muted}>
            <source src={require("./sound/soundtrack.webm")} type="audio/webm" />
        </audio>
    </div>
}