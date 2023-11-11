import React, { useState, useEffect } from "react";
import '../styles/Converter.css';
import Footer from './Footer';

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
        <div>
            <h2>Conversor de Moedas</h2>

            <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <span>para</span>

            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            <button onClick={handleConversion}>Converter</button>

            <p>Converter Moeda: {convertedAmount}</p>

            <Footer />
        </div>
    );
}

export default Converter;