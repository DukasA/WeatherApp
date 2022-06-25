import React, { useState, useEffect } from 'react';
import CurrencyInput from '../CurrencyInput';
import styles from './Converter.module.scss';

function Converter({rates}) {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');

    useEffect(() => {
        if(!!rates) {
            handleAmount1Change(1);
        }
    }, [rates])

    function format(number) {
        return number.toFixed(4);
    }

    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency2(currency2);
    }

    return (

        <div className={styles.converter}>
            <h1 className={styles.title}>Currency Converter</h1>
            <div className={styles.inputs}>
                <span className={styles.inputs__subtitle}>From</span>
                <CurrencyInput 
                    currencies={Object.keys(rates)} 
                    amount={amount1} 
                    currency={currency1}
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                />
                <span className={styles.inputs__subtitle}>To</span>
                <CurrencyInput 
                    currencies={Object.keys(rates)} 
                    amount={amount2} 
                    currency={currency2}
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change}
                />
            </div>
        </div>
        
    )
}

export default Converter;