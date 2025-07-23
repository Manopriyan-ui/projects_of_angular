import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(String(eval(input))); // ⚠️ eval for simplicity, safe for local use only.
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input type="text" className="calculator-input" value={input} readOnly />
      <div className="calculator-buttons">
        {/* Row 1 */}
        <button onClick={handleClear} className="btn clear">C</button>
        <button onClick={handleBackspace} className="btn">⌫</button>
        <button onClick={() => handleClick('%')} className="btn">%</button>
        <button onClick={() => handleClick('/')} className="btn operator">÷</button>

        {/* Row 2 */}
        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleClick('*')} className="btn operator">×</button>

        {/* Row 3 */}
        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleClick('-')} className="btn operator">−</button>

        {/* Row 4 */}
        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={() => handleClick('+')} className="btn operator">+</button>

        {/* Row 5 */}
        <button onClick={() => handleClick('0')} className="btn zero">0</button>
        <button onClick={() => handleClick('.')} className="btn">.</button>
        <button onClick={handleCalculate} className="btn equal">=</button>
      </div>
    </div>
  );
}

export default App;
