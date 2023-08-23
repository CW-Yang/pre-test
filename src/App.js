import './App.css';
import addComma from './utils/addComma';
import getNumberIntervals from './utils/getNumberIntervals';
import AgePriceGroupList from './components/AgePriceGroup/AgePriceGroupList';


function App() {
  // console.log(addComma(-7855948.9527));
  // console.log(getNumberIntervals([[6, 11], [5, 8], [17, 20], [7, 7], [14,17]]));

  return (
    <div className="App">
      <AgePriceGroupList onChange={reslut => console.log(reslut)}/>
    </div>
  );
}

export default App;
