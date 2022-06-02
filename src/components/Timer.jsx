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
                setTime((prevTime)=>prevTime + 1 ); 
            },10)
        } else if (!isRunning) {
            clearInterval(interval)
        }

        return () => clearInterval(interval);

    },[isRunning])
    
    return <div className="timer">
        <p>Time: {time/100}</p>
        
    </div>
}