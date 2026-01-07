import React from "react";
import PropTypes from "prop-types";
import "./Count.css";

function Count({ count, setCount }) {
  return (
    <div className="count-component">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        aria-label="Decrease count"
      >
        -
      </button>
      <span className="count-label">Count: {count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
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
