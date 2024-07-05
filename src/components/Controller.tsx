import { ChangeEvent, FC, useState } from "react";
import Button from "../button/Button";

interface ControllerProps {
  setStartValue: (count: number) => void;
  setMaxValue: (count: number) => void;
}

const Controller: FC<ControllerProps> = (props) => {
  const [maxInputValue, setMaxInputValue] = useState<number>();
  const [startInputValue, setStartInputValue] = useState<number>();

  const setMaxInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxInputValue(+e.currentTarget.value);
  };

  const setMinInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartInputValue(+e.currentTarget.value);
  };

  const setValues = () => {
    if (maxInputValue && startInputValue) {
      props.setMaxValue(maxInputValue);
      props.setStartValue(startInputValue);

      setMaxInputValue(0);
      setStartInputValue(0);
    }
  };

  return (
    <div className="controller">
      <div className="values">
        <div className="maxValue value">
          <span>max value:</span>
          <input
            type="number"
            value={maxInputValue}
            style={{ textAlign: "center", width: "120px", height: "100%" }}
            onChange={setMaxInputValueHandler}
          />
        </div>
        <div className="minValue value">
          <span>min value:</span>
          <input
            type="number"
            style={{ textAlign: "center", width: "120px", height: "100%" }}
            value={startInputValue}
            onChange={setMinInputValueHandler}
          />
        </div>
      </div>
      <div className="buttonWrapper">
        <Button
          title="set"
          onClickHandler={setValues}
          classes="controller__btn"
        />
      </div>
    </div>
  );
};

export default Controller;
