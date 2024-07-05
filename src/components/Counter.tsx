import { Line } from "rc-progress";
import { FC } from "react";
import Button from "../button/Button";

interface CounterProps {
  counter: number;
  maxValue: number;
  setCounter: (count: number) => void;
}

const Counter: FC<CounterProps> = (props) => {
  const addCountHandler = () => {
    props.setCounter(props.counter + 1);
  };

  const resetCounterHandler = () => {
    props.setCounter(0);
  };

  const percentForProgressBar = (props.counter / props.maxValue) * 100;

  return (
    <div className="counter">
      <h3>Max value {props.maxValue}</h3>
      <h2 className={props.counter >= props.maxValue ? "red" : ""}>
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
          disabled={props.counter >= props.maxValue}
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
