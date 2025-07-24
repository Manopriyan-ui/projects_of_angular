import React, { useState, useEffect } from "react";
import './App.css';

const currencyList = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"];

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  const API_KEY = "704eb5321ebd425c36a01fab"; 
  const getExchangeRate = async () => {
    setIsLoading(true);
    setResult("");
    try {
      const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.result === "success") {
        setResult(`${amount} ${from} = ${data.conversion_result} ${to}`);
      } else if (data && data["error-type"]) {
        setResult("Conversion failed: " + data["error-type"]);
      } else {
        setResult("Conversion failed.");
      }
    } catch (e) {
      setResult("Something went wrong!");
      console.error(e);
    }
    setIsLoading(false);
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setResult("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };



  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            min="0"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            required
          />
        </label>
        <label>
          From:
          <select value={from} onChange={e => setFrom(e.target.value)}>
            {currencyList.map(cur => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </label>
        <label>
          To:
          <select value={to} onChange={e => setTo(e.target.value)}>
            {currencyList.map(cur => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </label>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <button 
            type="button" 
            onClick={handleSwap}
            style={{ flex: '1', marginRight: '0.6rem' }}
          >
            Swap
          </button>
          <button type="submit" disabled={isLoading} style={{ flex: '2' }}>
            {isLoading ? "Converting..." : "Convert"}
          </button>
        </div>
      </form>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;