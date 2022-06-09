import { useEffect,useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { selectGameEnd } from "../store/game/selector"
import { selectRecords, selectScore } from "../store/timer/selector"
import { selectGame } from "../store/screen/selector"
import { saveRecord } from "../store/timer/slice"

import finish from "../minigames/sounds/finish.wav"

// get a timeStamp in selector

import "./EndGame.css"


export default function EndGame(){
  const dispatch = useDispatch();
  const records = useSelector(selectRecords);
  const gameEnd = useSelector(selectGameEnd);
  const score = useSelector(selectScore);
  const game=useSelector(selectGame);
  const currentRecord = records[game].time;
  const [name,setName] = useState("");
  const [hidden,setHidden]= useState(false)
  
  const newRecord = [game,name,score]
  console.log(newRecord);

  const Sound = () =>{
    const audio = new Audio(finish);
    audio.loop = false;
    audio.play();
  }

  const recordOnChange = (event)=>{
    setName(event.target.value)
  }
  const onSaveRecord = ()=> {
    dispatch(saveRecord(newRecord))
    setHidden(true)
  }
  
    useEffect(()=>{
      Sound();
    },[])
    
  return <div>
    {!gameEnd ? ""
      :
      <div className="EndGame"  > 
        {/* <audio autoPlay >
            <source src={finish} type="audio/wav" />
        </audio> */}
        <h1>FINISHED</h1>
        <p>time</p>
        <h2>{score} sec</h2>
        {score>currentRecord? 
        "":
        <div style={hidden?{display:"none"}:{display:"block"}}>
          NEW RECORD!
          <input onChange={(event)=> setName(event.target.value)} value={name}/>
          <button onClick={()=>onSaveRecord()}  >submit</button>
        </div>
        }

      </div>
    }
  </div>
}