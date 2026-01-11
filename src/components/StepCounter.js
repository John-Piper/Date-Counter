import PropTypes from "prop-types";
import "./StepCounter.css";

function StepCounter({ steps, setSteps }) {
  return (
    <div className="step-counter">
      <button
        onClick={() => setSteps((prev) => Math.max(-100, prev - 1))}
        aria-label="Decrease steps"
      >
        -
      </button>
      <input
        type="range"
        min={-100}
        max={100}
        value={steps}
        onChange={(e) => setSteps(Number(e.target.value))}
        className="step-range-input"
        aria-label="Steps scroll bar"
      />
      <span className="step-label">Steps: {steps}</span>
      <button
        onClick={() => setSteps((prev) => Math.min(100, prev + 1))}
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
