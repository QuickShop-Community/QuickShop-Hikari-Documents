import React from 'react';

import styles from './LocalizationLibrary.module.css';

export default function LocalizationFilters({
    usageFilter,
    onUsageFilterChange,
    documentationFilter,
    onDocumentationFilterChange
}) {

    return (
        <div className={styles.filters}>

            <label>
                Usage
                <select
                    value={usageFilter}
                    onChange={(event) => onUsageFilterChange(event.target.value)}
                >
                    <option value="all">All</option>
                    <option value="used">Usage detected</option>
                    <option value="unused">No detected usage</option>
                    <option value="gui">GUI usage</option>
                    <option value="java">Java usage</option>
                </select>
            </label>

            <label>
                Documentation
                <select
                    value={documentationFilter}
                    onChange={(event) => onDocumentationFilterChange(event.target.value)}
                >
                    <option value="all">All</option>
                    <option value="documented">Documented</option>
                    <option value="undocumented">Undocumented</option>
                </select>
            </label>

        </div>
    );
}
