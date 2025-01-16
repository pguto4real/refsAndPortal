import React, { useImperativeHandle, useRef } from "react";

const ResultModal = ({ result, targetTime, ref }) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return{
        test(){
            console.log(result)
        }
    }
  });
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 && "s"}
        </strong>
      </p>
      You stopped the timer with{" "}
      <strong>X second{targetTime > 1 && "s"} left</strong>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
