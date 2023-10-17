import logo from './icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="http://34.123.222.223:5800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Load files
        </a>
        
      </header>
    </div>
  );
}

export default App;
