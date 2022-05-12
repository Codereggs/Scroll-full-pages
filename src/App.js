import { useCallback } from "react";
import "./styles/style.css";
import { debounce, moveInScreen } from "./utils/functions";

function App() {
  const debouncedCallback = useCallback(debounce(moveInScreen, 400), []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="sections" onWheel={debouncedCallback}>
            <div className="section vertical uno active">
              <h1>Animejs plugins</h1>
            </div>
            <div className="section vertical dos">
              <h1 className="purple">Animejs plugins</h1>
            </div>
            <div className="section horizontal tres">
              <h1>Animejs plugins</h1>
            </div>
            <div className="section horizontal cuatro">
              <h1>Animejs plugins</h1>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
