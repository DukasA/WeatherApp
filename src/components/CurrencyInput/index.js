import React from 'react';
import styles from './CurrencyInput.module.scss';

function CurrencyInput(props) {

    return (

        <div className={styles.group}>
            <input 
                type='text' 
                value={props.amount} 
                onChange={e => props.onAmountChange(e.target.value.replace(/\D/g, ''))} 
            />
            <select 
                value={props.currency}
                onChange={e => props.onCurrencyChange(e.target.value)}
            >
                {props.currencies.map(currency => (
                    <option 
                        key={currency}
                    >
                        {currency}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default CurrencyInput;
