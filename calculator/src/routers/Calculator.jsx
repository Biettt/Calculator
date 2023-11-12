import React, { useState } from "react";
import '../styles/Calculator.scss';
import '../styles/Nav.css';

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

    const handleButtonClick = (value) => {
        setExpression(expression + value);
    };

    return (
        <div className="calculator">
            <h2>Calculadora</h2>

            <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
            />

            <div className="button-container">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => setExpression('')}>C</button>
                <button onClick={handleCalculation}>=</button>
            </div>

            <p>Resultado: {result}</p>
        </div>
    );
}

export default Calculator;