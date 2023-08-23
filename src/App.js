import './App.css';
import addComma from './utils/addComma';
import getNumberIntervals from './utils/getNumberIntervals';
import PriceInput from './components/PriceInput';
import { Container } from 'reactstrap';
import AgeGroupSelect from './components/AgeGroupSelect';

function App() {
  console.log(addComma(-7855948.9527));
  console.log(getNumberIntervals([[6, 11], [5, 8], [17, 20], [7, 7], [14,17]]));
  return (
    <div className="App">
      <Container>
        <div className='d-flex justify-content-around flex-wrap'>
          <AgeGroupSelect />
          <PriceInput />
        </div>
      </Container>
    </div>
  );
}

export default App;
