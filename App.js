import './App.css';
import { Button } from './Button.js';

import React, { useState } from 'react';


function Buttons(props) {
  return (
    <button onClick={(e) => setVal(val + e.target.value)}></button>
  );
};

const App = () => {
  const [val, setVal] = useState("");

  //clear
  const backspace = () => {
    try {
      setVal(val.slice(0, -1))

    } catch (error) {
      setVal("")

    }
  }

  const calculate = () => {
    try {
      setVal(eval(val));

    } catch (error) {
      setVal("Error")
    }
  }


  return (
    <div class="calculator" id="calci">
      <input class="input" id="input" value={val}></input>
      <div class="buttons">
        <div class="leftPanel">
          <div className='numbers'>
          <button className='numbers' value="1" onClick={(e) => setVal(val + e.target.value)}>1</button>
            <button className='numbers' value="2" onClick={(e) => setVal(val + e.target.value)}>2</button>
            <button className='numbers' value="3" onClick={(e) => setVal(val + e.target.value)}>3</button>
            <button id='clear' className='clear' onClick={() => backspace()}>C</button>
          </div>
          <div className='numbers'>
            <button className='numbers' value="4" onClick={(e) => setVal(val + e.target.value)}>4</button>
            <button className='numbers' value="5" onClick={(e) => setVal(val + e.target.value)}>5</button>
            <button className='numbers' value="6" onClick={(e) => setVal(val + e.target.value)}>6</button>
            <button className='numbers' value="+" onClick={(e) => setVal(val + e.target.value)}>+</button>
          </div>
          <div className='numbers'>
            <button className='numbers' value="7" onClick={(e) => setVal(val + e.target.value)}>7</button>
            <button className='numbers' value="8" onClick={(e) => setVal(val + e.target.value)}>8</button>
            <button className='numbers' value="9" onClick={(e) => setVal(val + e.target.value)}>9</button>
            <button className='numbers' value="*" onClick={(e) => setVal(val + e.target.value)}>x</button>
          </div>
          <div className='numbers'>
            <button className='numbers' value="." onClick={(e) => setVal(val + e.target.value)}>.</button>
            <button className='numbers' value="0" onClick={(e) => setVal(val + e.target.value)}>0</button>
            <button className='numbers' value="=" onClick={() => calculate()}>=</button>
            <button className='numbers' value="/" onClick={(e) => setVal(val + e.target.value)}>/</button>
          </div>
        </div>
      </div>
    </div>

  );
};



export default App;
