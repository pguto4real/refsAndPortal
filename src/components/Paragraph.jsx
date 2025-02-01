import React from "react";

const Paragraph = ({ label, type }) => {
  return (
    <p>
      <label>{label}</label>
      <input type={type} />
    </p>
  );
};

export default Paragraph;
