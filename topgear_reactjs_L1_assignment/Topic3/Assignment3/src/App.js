import "./App.css";

function App() {
  const items = [];
  for (var i = 1; i <= 10; i++) {
    items.push(
      <tr key={i.id}>
        <td>5 X {i}</td>
        <td>{5 * i}</td>
      </tr>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <th>Multiplication</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
