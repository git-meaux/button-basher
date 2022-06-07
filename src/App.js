import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";
import { useSelector, useDispatch } from "react-redux";

import { selectScreen } from "./store/screen/selector";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="MainScreen"
          style={{ width: 800, height: 550, backgroundColor: "black" }}
        >
          <StartScreen />
          {/* <GameScreen /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
