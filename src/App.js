import "./App.css";
import StepCounter from "./components/StepCounter";
import Count from "./components/Count";
import DateDisplay from "./components/DateDisplay";
import StepWarning from "./components/StepWarning";

import React, { useState } from "react";

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Date Counter Application</h1>
      <StepCounter steps={steps} setSteps={setSteps} />
      {steps === 0 && <StepWarning />}
      <Count count={count} setCount={setCount} />
      <DateDisplay steps={steps} count={count} />
      <button
        className="reset-button"
        onClick={() => {
          setSteps(1);
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
