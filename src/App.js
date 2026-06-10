import './App.css';
import reactLogo from './assets/react-logo.png';
import Button from './components/Button';
import { Counter } from './components/Counter';
import { useState } from 'react';

function App() {

  const [clicksCount, setClicksCount] = useState(99990);

  const handleClick = () => {
    setClicksCount(clicksCount + 1);
  }

  const handleReset = () => {
    setClicksCount(0);
  }
  return (
    <div className="App">
      <div className="logo-container">
        <img 
          className="react-logo"
          src={reactLogo}
          alt="React Logo" 
        />
      </div>
      <div className="main-container">
        
        <h1>Counter Clicks App</h1>

        <Counter clicksCount={clicksCount} />
        
        <div className="buttons-container">
          <Button
            text = "Click me!"
            isResetBtn = {false}
            handleClick = {handleClick}
          >
          </Button>
          <Button
            text = "Reset"
            isResetBtn = { true}
            handleClick = {handleReset}
          >
          </Button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
