import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={`${styles.app}`}>
      <div className="text-preset--logo">calc</div>

      <div className="text-preset--toggle">theme</div>

      <div className="text-preset--screen">399,981</div>

      <button className="text-preset--key-3">7</button>
      <button className="text-preset--key-3">8</button>
      <button className="text-preset--key-3">9</button>
      <button className="text-preset--key-1">del</button>
      <button className="text-preset--key-3">4</button>
      <button className="text-preset--key-3">5</button>
      <button className="text-preset--key-3">6</button>
      <button className="text-preset--key-3">+</button>
      <button className="text-preset--key-3">1</button>
      <button className="text-preset--key-3">2</button>
      <button className="text-preset--key-3">3</button>
      <button className="text-preset--key-3">-</button>
      <button className="text-preset--key-3">.</button>
      <button className="text-preset--key-3">0</button>
      <button className="text-preset--key-3">/</button>
      <button className="text-preset--key-3">x</button>
      <button className="text-preset--key-1">reset</button>
      <button className="text-preset--key-2">=</button>
    </div>
  );
}
