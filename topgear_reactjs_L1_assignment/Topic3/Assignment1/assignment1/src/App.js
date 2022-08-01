import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Employee Details in Table format</h4><br/>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email ID</th>
            </tr>
          </thead>
          <tr>
            <td>2022001</td>
            <td>Josh dean</td>
            <td>josh001@yop.com</td>
          </tr>
          <tr>
            <td>2022002</td>
            <td>Amrit Meheta</td>
            <td>Amrit002@yop.com</td>
          </tr>
          <tr>
            <td>2022003</td>
            <td>Dushmanth Narayan</td>
            <td>Narayan003@yop.com</td>
          </tr>
          <tr>
            <td>2022004</td>
            <td>Harishankar</td>
            <td>hari004@yop.com</td>
          </tr>
          <tr>
            <td>2022005</td>
            <td>Siva Mani</td>
            <td>Siva005@yop.com</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
