import React, { useState } from "react";
import '../styles/Calculator.css';
import Footer from './Footer';

function Calculator() {
    const [result, setResult] = useState(0);
    const [expression, setExpression] = useState('');

    const handleCalculation = () => {
        try {
            setResult(eval(expression));
        } 
        catch (error) {
            setResult('Error');
        }
    };

    return(
        <div>
            <h2>Calculadora</h2>

            <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            />

            <button onClick={handleCalculation}>=</button>

            <p>Resultado: {result}</p>

            <Footer/>
        </div>
    )
}

export default Calculator;