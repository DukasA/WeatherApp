import React from 'react';
import styles from './Copyright.module.scss';

function Copyright() {

    const currentYear = new Date().getFullYear();

    return (

        <div className={styles.copyright}>
            &copy;{currentYear}
        </div>

    )
}

export default Copyright;
