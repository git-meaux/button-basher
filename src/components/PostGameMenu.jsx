import "./PostGameMenu.css"

import { useDispatch, useSelector } from "react-redux"

export default function PostGameMenu(){
    const dispatch = useDispatch()


    return <div className="postgame-menu">
        
        <div className="post-select">Startscreen</div>
        <div className="post-select">Replay</div>
        <div>Next Game</div>
    </div>
}