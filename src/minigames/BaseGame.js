import { useDispatch } from "react-redux";

import { countIncrement } from "../store/game/slice";

export default function BaseGame() {
  const dispatch = useDispatch();
  const increment = useDispatch(countIncrement());

  const keyPressHandler = (event) => {
    console.log(`Key pressed: ${event.key}`);
  };

  document.removeEventListener("keydown", keyPressHandler);

  return (
    <div className="basegame-container">
      <h2>This base game</h2>
    </div>
  );
}
