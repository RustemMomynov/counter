import { FC, useRef } from "react";
import Button from "../button/Button";
import { Line } from "rc-progress";
import Counter from "./Counter";
import Controller from "./Controller";

interface ControlledCounterProps {
  counter: number;
  startValue: number;
  maxValue: number;
  setCounter: (count: number) => void;
  setStartValue: (count: number) => void;
  setMaxValue: (count: number) => void;
}

const ControlledCounter: FC<ControlledCounterProps> = (props) => {
  return (
    <div className="controlledCounter">
      <Controller
        setStartValue={props.setStartValue}
        setMaxValue={props.setMaxValue}
      />
      <Counter
        counter={props.counter}
        maxValue={props.maxValue}
        setCounter={props.setCounter}
      />
    </div>
  );
};

export default ControlledCounter;
