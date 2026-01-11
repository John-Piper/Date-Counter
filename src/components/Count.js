import PropTypes from "prop-types";
import "./Count.css";

function Count({ count, setCount }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCount(0);
      return;
    }
    const val = Number(value);
    if (!isNaN(val)) {
      const bounded = Math.max(-1000, Math.min(1000, val));
      setCount(bounded);
    }
  };

  return (
    <div className="count-component">
      <button
        onClick={() => setCount((prev) => Math.max(-1000, prev - 1))}
        aria-label="Decrease count"
      >
        -
      </button>
      <input
        type="number"
        className="count-number-input"
        value={count}
        onChange={handleInputChange}
        aria-label="Count number input"
        min={-1000}
        max={1000}
      />
      <span className="count-label">Count: {count}</span>
      <button
        onClick={() => setCount((prev) => Math.min(1000, prev + 1))}
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Count;
