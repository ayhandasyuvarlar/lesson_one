import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementAmount } from "./counterSlice";
const Counter = () => {
  const number = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementByCounter, setIncrementByCounter] = useState(0);
  const addValue = Number(incrementByCounter) || 0;
  const resetAll = () => {
    setIncrementByCounter(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{number}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type={"text"}
          value={incrementByCounter}
          onChange={(e) => {
            setIncrementByCounter(e.target.value);
          }}
        ></input>
        <button onClick={() => dispatch(incrementAmount(addValue))}>
          Add count
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
