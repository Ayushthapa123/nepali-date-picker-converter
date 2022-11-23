
import './App.css';


import { Datepicker } from './components/Datepicker';
import { DateProvider } from './components/contexts/dateContext';


function App() {


  return (
    <div className="App">
      <DateProvider>
        {/* <DatepickerWithPackage/> */}
        <Datepicker />
      </DateProvider>
    </div>
  );
}

export default App;
