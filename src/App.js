import logo from './logo.svg';
import './App.css';



import DatepickerWithPackage from './components/DatepickerWithPackage';
import { Datepicker } from './components/Datepicker';
import { DateProvider } from './components/contexts/dateContext';
import Test from './test/test';

function App() {


  return (
    <div className="App">
      {/* <DatepickerWithPackage/> */}
      <DateProvider>
        <div>
          <h2>Datepicker:</h2>
          <Datepicker />
          {/* <Test /> */}
        </div>
      </DateProvider>
    </div>
  );
}

export default App;
