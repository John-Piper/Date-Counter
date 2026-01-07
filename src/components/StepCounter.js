import React from "react";
import PropTypes from "prop-types";
import "./StepCounter.css";

function StepCounter({ steps, setSteps }) {
  return (
    <div className="step-counter">
      <button
        onClick={() => setSteps((prev) => prev - 1)}
        aria-label="Decrease steps"
      >
        -
      </button>
      <span className="step-label">Steps: {steps}</span>
      <button
        onClick={() => setSteps((prev) => prev + 1)}
        aria-label="Increase steps"
      >
        +
      </button>
    </div>
  );
}

StepCounter.propTypes = {
  steps: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default StepCounter;
