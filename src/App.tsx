import { useState, useEffect } from "react";
import "./App.css";
import CountrolledCounter from "./components/ControlledCounter";

function App() {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [counter, setCounter] = useState(startValue);

  useEffect(() => {
    setCounter(startValue);
  }, [startValue]);

  return (
    <div className="App">
      <CountrolledCounter
        counter={counter}
        startValue={startValue}
        maxValue={maxValue}
        setStartValue={setStartValue}
        setMaxValue={setMaxValue}
        setCounter={setCounter}
      />
    </div>
  );
}

export default App;
