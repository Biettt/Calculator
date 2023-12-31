import React, { useState, useEffect } from "react";
import '../styles/Converter.css';
import '../styles/Nav.css';

function Converter() {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('BRL');
    const [toCurrency, setToCurrency] = useState('USD');
    const [exchangeRates, setExchangeRates] = useState({});
    const [loading, setLoading] = useState(false);

    const currencies = ['BRL','USD', 'EUR', 'JPY', 'GBP', 'CAD', 'CHF', 'AUD', 'NZD', 'CNY', 'INR'];

    useEffect(() => {
    //Buscando taxas de cambio da API
    const fetchExchangeRates = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://openexchangerates.org/api/latest.json?app_id=39fe44b6278d468b89db4b7bc198ad15`
          );
          if (response.ok) {
            const data = await response.json();
            setExchangeRates(data.rates);
            setLoading(false);
          } else {
            console.error("Erro ao buscar taxas de câmbio");
            setLoading(false);
          }
        } catch (error) {
          console.error("Erro ao buscar taxas de câmbio:", error);
          setLoading(false);
        }
      };
    
      fetchExchangeRates();
    }, [fromCurrency]);

    const handleConversion = () => {
        if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
          const amountInUSD = amount / exchangeRates[fromCurrency];
          const converted = amountInUSD * exchangeRates[toCurrency];
          
          setConvertedAmount(converted.toFixed(2));
        }
      }

    return (
      <div className="converter-container">
      <h2>Conversor de Moedas</h2>
      <div className="input-box">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="input-box">
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConversion}>Converter</button>
      <p>Converter Moeda: {convertedAmount}</p>
    </div>
  );
};

export default Converter;