import logo from './logo.svg';
import './App.css';
import'./index.js';

function App() {
  return (
    <div className="App">
      
      {/* <header className="App-header">
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
      </header> */}
<header className="App-header">
<div className="clockContainer">
<div className="hour"></div>
        <div className="minute"></div>
        <div className="second"></div>
        <script src="index.js"></script>
</div>
      
        Analog Clock
        </header>
    </div>
   
  );
}

export default App;
