import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  let c = 0;
  return (
    <div className="App">
      <div className="counter">
        <button
          onClick={() => {
            count < -10 ? setCount(count - 1) : count;
          }}
        >
          -
        </button>
        {console.log(count)}
        <div className="count">{count}</div>
        <button
          onClick={() => {
            count < 10 ? setCount(count + 1) : count;
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
