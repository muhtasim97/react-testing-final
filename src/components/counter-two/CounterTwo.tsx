import "./CounterTwo.scss";
import { CounterTwoProps } from "./CounterTwo.types";
const CounterTwo: React.FC<CounterTwoProps> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <section className="p-counter">
      <h1>Counter two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </section>
  );
};
export default CounterTwo;
