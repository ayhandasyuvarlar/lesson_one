import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
const Counter = () => {
  const number = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{number}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </section>
  );
};

export default Counter;
