import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import addComma from './utils/addComma';
import getNumberIntervals from './utils/getNumberIntervals';

function App() {
  console.log(addComma(-7855948.9527));
  console.log(getNumberIntervals([[6, 11], [5, 8], [17, 20], [7, 7], [14,17]]));
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
      <Button>button</Button>
    </div>
  );
}

export default App;
