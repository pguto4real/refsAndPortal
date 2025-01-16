import React, { useImperativeHandle, useRef } from "react";

const ResultModal = ({ targetTime, remainingTime, ref, onReset }) => {
  const dialog = useRef();
  // console.log(remainingTime)
  const userLost = remainingTime <= 0?"Lost":"Win";
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
     <h2>You {userLost}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 && "s"}
        </strong>
      </p>
      You stopped the timer with{" "}
      <strong>
        {formattedRemainingTime} second{formattedRemainingTime > 1 && "s"} left
      </strong>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
