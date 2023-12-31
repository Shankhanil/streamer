import logo from './icon.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FileList from './FileList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Route path='/load' exact component={FileList} />
        </Router>        
      </header>
    </div>
  );
}

export default App;
