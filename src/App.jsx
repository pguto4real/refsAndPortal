import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { Timer as timerData } from "./data.js";
function App() {

  return (
    <>
      <Player />
      <div id="challenges">
        {timerData.map(({title,targetTime}) => (
          <TimerChallenge key={title} title={title} targetTime={targetTime} />
        ))}
      </div>
    </>
  );
}

export default App;
