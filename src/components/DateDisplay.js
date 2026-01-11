import PropTypes from "prop-types";
import "./DateDisplay.css";

function DateDisplay({ steps, count }) {
  const today = new Date();
  const resultDate = new Date(today);
  const days = steps * count;
  resultDate.setDate(today.getDate() + days);

  // Format as 'Tue Jun 22 2027'
  const formatted = resultDate.toDateString();

  const displayText =
    days === 0
      ? `Today is ${formatted}`
      : days < 0
      ? `${Math.abs(days)} days ago was ${formatted}`
      : `${days} days from today is ${formatted}`;

  return (
    <div className="date-display">
      <span>{displayText}</span>
    </div>
  );
}

DateDisplay.propTypes = {
  steps: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default DateDisplay;
