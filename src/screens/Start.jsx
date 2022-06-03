import "./Start.css";
export default function StartScreen(){
    return <div className="StartScreen">
        <div className="ClickHere">Click Here To Start</div>
        {/* <iframe src=”https://olafwempe.com/mp3/silence/silence.mp3″ type=”audio/mp3″ allow=”autoplay” id=”audio” style=”display:none”></iframe> */}
        <iframe src={require("./sound/soundtrack.webm")} type="audio/webm" allow="autoplay" id="audio" style={{display:"none"}} ></iframe>
        {/* <audio autoPlay loop id="playAudio">
            <source src={require("./sound/soundtrack.webm")} type="audio/webm" />
        </audio> */}
    </div>
}