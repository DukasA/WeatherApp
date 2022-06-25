import React, { useEffect, useState }  from 'react';
import styles from './Header.module.scss';
import {FcCurrencyExchange} from 'react-icons/fc';
import {BsCurrencyEuro} from 'react-icons/bs';
import {IoLogoUsd} from 'react-icons/io5';

function Header({rates}) {

    const [eur, setEur] = useState(0);
    const [usd, setUsd] = useState(0);

    function format(number) {
        return number.toFixed(2);
    } 

    useEffect(() => {
        if(!!rates) {
            setUsd(format(1 * rates['UAH'] / rates['USD']));
            setEur(format(1 * rates['UAH'] / rates['EUR']));
        }
    }, [rates]);

    return (

        <div className={styles.header}>
            <div className={styles.logoSection}>
                <span className={styles.logoImg}><FcCurrencyExchange/></span>
                <span className={styles.logoName}>Sola</span>
            </div>
            <div className={styles.currencySection}>
            <ul>
                <li>
                    <span className={styles.amount}>1</span>
                    <BsCurrencyEuro/> 
                    : 
                    <span className={styles.amount}>{eur}</span> 
                    UAH
                </li>
                <li>
                    <span className={styles.amount}>1</span>
                    <IoLogoUsd/> 
                    : 
                    <span className={styles.amount}>{usd}</span> 
                    UAH
                </li>
            </ul>
            </div>
        </div>
    
    )
}

export default Header;
