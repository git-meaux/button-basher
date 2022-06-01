import GameScreen from "./screens/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="MainScreen"
          style={{ width: 800, height: 550, backgroundColor: "black" }}
        >
          <GameScreen />
        </div>
      </header>
    </div>
  );
}

export default App;
