import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
    setDisplayValue((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setDisplayValue(result);
      setInput(result.toString());
    } catch {
      setDisplayValue('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setDisplayValue('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={displayValue} readOnly />
      </div>
      <div className="buttons">
        <button className="number" onClick={() => handleClick('1')}>1</button>
        <button className="number" onClick={() => handleClick('2')}>2</button>
        <button className="number" onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button className="number" onClick={() => handleClick('4')}>4</button>
        <button className="number" onClick={() => handleClick('5')}>5</button>
        <button className="number" onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button className="number" onClick={() => handleClick('7')}>7</button>
        <button className="number" onClick={() => handleClick('8')}>8</button>
        <button className="number" onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        <button className="clear" onClick={clearInput}>C</button>
        <button className="number" onClick={() => handleClick('0')}>0</button>
        <button className="equal" onClick={calculateResult}>=</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
