import "./PostGameMenu.css"

import { useDispatch, useSelector } from "react-redux"

export default function PostGameMenu(){
    const dispatch = useDispatch()


    return <div className="postgame-menu">
        
        <div>Startscreen</div>
        <div>Replay</div>
        <div>Next Game</div>
    </div>
}