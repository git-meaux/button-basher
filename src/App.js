import { useSelector, useDispatch } from "react-redux";
import { selectScreen } from "./store/screen/selector";

import "./App.css";

import GameScreen from "./screens/Game";
import StartScreen from "./screens/Start";
import Menu from "./screens/Menu";

function App() {
  const Screen = useSelector(selectScreen);
  // console.log(Screen);

  const Display = [<StartScreen />, <Menu />, <GameScreen />];

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="MainScreen"
          style={{ width: 800, height: 550, backgroundColor: "black" }}
        >
          {Display[Screen.screen]}
          {/* <StartScreen /> */}
          {/* <GameScreen /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
