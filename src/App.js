import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="counter">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <div className="count">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
