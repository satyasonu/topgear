import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);
  function addTableRow() {
    setCount(count + 1);
    if (count <= 10) setItems([...items, count]);
  }
  return (
    <>
      <div className="button">
        <button onClick={addTableRow}>
          Click to generate Multiplication tables of 5{" "}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Multiplication</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {items.map((e) => (
            <tr>
              <td>5 x {e}</td>
              <td>{5 * e}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
