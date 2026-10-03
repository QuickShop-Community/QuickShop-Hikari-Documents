import React from 'react';

import styles from './LocalizationLibrary.module.css';

export default function LocalizationSearch({value, onChange}) {

    return (
        <div className={styles.searchContainer}>

            <label className={styles.searchLabel} htmlFor="localization-search">
                Search localization
            </label>

            <input
                id="localization-search"
                className={styles.search}
                type="search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search key, message, placeholder, GUI, class..."
            />

        </div>
    );
}
