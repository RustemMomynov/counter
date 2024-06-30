import { FC, useRef } from "react";
import Button from "../button/Button";
import { Line } from "rc-progress";

interface CounterProps {
  counter: number;
  setCounter: (count: number) => void;
}

const Counter: FC<CounterProps> = (props) => {
  const maxCounterValue = useRef(5);

  const addCountHandler = () => {
    const newCounter = props.counter + 1;
    props.setCounter(newCounter);
  };

  const resetCounterHandler = () => {
    props.setCounter(0);
    maxCounterValue.current = Math.floor(Math.random() * 101);
  };

  const percentForProgressBar = (props.counter / maxCounterValue.current) * 100;

  return (
    <div className="counter">
      <h3>Max value {maxCounterValue.current}</h3>
      <h2 className={props.counter >= maxCounterValue.current ? "red" : ""}>
        {props.counter}
      </h2>
      <Line
        percent={percentForProgressBar}
        strokeWidth={1}
        trailWidth={0.5}
        trailColor="black"
        strokeLinecap="square"
      />
      <div>
        <Button
          disabled={props.counter >= maxCounterValue.current}
          title="Inc"
          onClickHandler={addCountHandler}
        />
        <Button
          title="reset"
          disabled={props.counter < 1}
          onClickHandler={resetCounterHandler}
        />
      </div>
    </div>
  );
};

export default Counter;
