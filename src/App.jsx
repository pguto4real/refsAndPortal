import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { Timer as timerData } from "./data.js";
function App() {
  
  console.log(timerData);
  return (
    <>
      <Player />
      <div id="challenges">
        {timerData.map((timer) => (
          <TimerChallenge title={timer.title} targetTime={timer.targetTime} />
        ))}
      </div>
    </>
  );
}

export default App;
