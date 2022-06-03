import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { selectRunning } from "../store/timer/selector";
import { setScore } from "../store/timer/slice";
import "./Timer.css"

export default function Timer(){

    const [time,setTime] = useState(0)

    const dispatch = useDispatch();
    const isRunning = useSelector(selectRunning);

    useEffect(()=>{
        let interval = null;
        if (isRunning) { 
            interval = setInterval(()=>{
                setTime((prevTime)=>prevTime + 1 ); 
            },10)
        } else if (!isRunning) {
            dispatch(setScore(time/100));
            clearInterval(interval);
            
        }

        return () => {
            console.log("STOP THE TIME")
            dispatch(setScore(time))
            clearInterval(interval)
        };

    },[isRunning])
    
    return <div className="timer" style={ isRunning ? {display:"inline"}:{display:"none"} }>
        <p>Time: {time/100}</p>
        
    </div>
}