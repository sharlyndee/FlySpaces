import React from "react";
import "./style.css";

const button = ({ handleClick, children, btnstyle }) => {
  return (
    <div>
      <button
        className={`${btnstyle} buttonstyle`}
        type="button"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

export default button;
