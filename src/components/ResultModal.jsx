import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = ({ targetTime, remainingTime, ref, onReset }) => {
  const dialog = useRef();

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  const userLost = remainingTime <= 0 ? "You Lost" : `Yor Score :${score}`;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
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
    </dialog>,
    document.getElementById("modal")
  );
};

export default ResultModal;
