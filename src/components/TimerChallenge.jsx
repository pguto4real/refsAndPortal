import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.test();
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }
  return (
    <>
<ResultModal targetTime={targetTime} result="lost" ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>

        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 && "s"}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted && "active"}>
          {timerStarted ? "Time is runnung" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
