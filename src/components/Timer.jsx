import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { selectRunning } from "../store/timer/selector";

import "./Timer.css"

export default function Timer(){

    const [time,setTime] = useState(0)

    const dispatch = useDispatch();
    const isRunning = useSelector(selectRunning);

    useEffect(()=>{
        let interval = null;
        if (isRunning) { 
            interval = setInterval(()=>{
                setTime((prevTime)=>prevTime + 10 ); 
            },10)
        } else if (!isRunning) {
            clearInterval(interval)
        }

        return () => clearInterval(interval);

    },[isRunning])
    
    return <div className="timer">
        {/* <p>timer here:</p> */}
        <h2>{time}</h2>
    </div>
}