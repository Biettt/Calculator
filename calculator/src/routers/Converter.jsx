import React, { useState, useEffect } from "react";
import '../styles/Converter.css';
import Footer from './Footer';

function Converter() {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmound] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CAD', 'CHF', 'AUD', 'NZD', 'CNY', 'INR'];

    useEffect(() => {
    //Buscando taxas de cambio da API
    const fetchExchangeRates = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.apilayer.com/exchangerates_data/latest?base=USD&apikey=YOUR_API_KEY`
            );
            if (response.ok) {
                const data = await response.json();
                setExchangeRates(data.rates);
                setLoading(false);
            }
            else {
                console.error("Erro ao buscar taxas de câmbio");
                setLoading(false);
            }
        } 
        catch (error) {
            console.error("Erro ao buscar taxas de câmbio:", error);
            setLoading(false);
        }
    };
    
        fetchExchangeRates();
      }, []);

    const handleConversion = () => {
        if (exchangeRates[selectedCurrency]) {
            const converted = amount * exchangeRates[selectedCurrency];
            setConvertedAmount(converted.toFixed(2));
        }
    }

    return(
        <div>
            <h2>Conversor de Moedas</h2>

            <input
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <select onChange={(e) => setSelectedCurrency(e.target.value)}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <button onClick={handleConversion}>Converter</button>

            <p>Converter Moeda: {convertedAmount}</p>

            <Footer/>
        </div>
    );
}

 export default Converter;