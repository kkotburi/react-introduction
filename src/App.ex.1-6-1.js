import logo from "./logo.svg";
import "./App.css";

// im(in) : 안쪽;
// ex(out) : 바깥쪽;

// port(항구)

function App() {
  // This is JS zone
  return (
    // This is JSX쟉스 => Javascript + XML(HTML) zone
    // {JS zone}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
