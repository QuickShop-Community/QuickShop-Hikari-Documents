import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import localizationData from '../../data/localization.json';

import LocalizationSearch from '../../components/LocalizationLibrary/LocalizationSearch';
import LocalizationFilters from '../../components/LocalizationLibrary/LocalizationFilters';
import LocalizationEntry from '../../components/LocalizationLibrary/LocalizationEntry';

import styles from '../../components/LocalizationLibrary/LocalizationLibrary.module.css';

const PAGE_SIZE = 50;
const SEARCH_DEBOUNCE = 200;

export default function LocalizationLibrary() {

    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [usageFilter, setUsageFilter] = useState('all');
    const [documentationFilter, setDocumentationFilter] = useState('all');
    const [page, setPage] = useState(1);

    useEffect(() => {

        const timeout = setTimeout(() => {

            setDebouncedSearch(search);
        }, SEARCH_DEBOUNCE);

        return () => clearTimeout(timeout);
    }, [search]);

    useEffect(() => {

        setPage(1);
    }, [debouncedSearch, usageFilter, documentationFilter]);

    const entries = localizationData.entries ?? [];

    const filteredEntries = useMemo(() => {

        const query = debouncedSearch.trim().toLowerCase();

        return entries.filter((entry) => {

            if (usageFilter === 'used' && !entry.status.used) return false;
            if (usageFilter === 'unused' && entry.status.used) return false;
            if (usageFilter === 'gui' && !entry.status.hasGuiUsage) return false;
            if (usageFilter === 'java' && !entry.status.hasJavaUsage) return false;

            if (documentationFilter === 'documented' && !entry.status.documented) return false;
            if (documentationFilter === 'undocumented' && entry.status.documented) return false;

            if (!query) return true;

            const searchable = [
                entry.key,
                entry.translation?.raw,
                entry.translation?.plain,
                ...(entry.placeholders ?? []),
                JSON.stringify(entry.documentation ?? {}),
                ...(entry.usages ?? []).map((usage) => [
                    usage.type,
                    usage.file,
                    usage.className,
                    usage.gui,
                    usage.configPath,
                    usage.property,
                    usage.reference
                ].filter(Boolean).join(' '))
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            return searchable.includes(query);
        });

    }, [entries, debouncedSearch, usageFilter, documentationFilter]);

    const totalPages = Math.max(1, Math.ceil(filteredEntries.length / PAGE_SIZE));
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, filteredEntries.length);
    const visibleEntries = filteredEntries.slice(startIndex, endIndex);

    return (
        <Layout
            title="Localization Library"
            description="Browse and search QuickShop-Hikari localization keys."
        >
            <main className={styles.page}>

                <section className={styles.hero}>

                    <div className="container">

                        <span className={styles.eyebrow}>QuickShop-Hikari Reference</span>

                        <h1>Localization Library</h1>

                        <p>
                            Search localization keys, default messages, placeholders,
                            GUI references, and Java usages across QuickShop-Hikari.
                        </p>

                        <div className={styles.stats}>
                            <Stat value={localizationData.summary?.translations ?? 0} label="Translations" />
                            <Stat value={localizationData.summary?.guiReferences ?? 0} label="GUI References" />
                            <Stat value={localizationData.summary?.javaReferences ?? 0} label="Java References" />
                            <Stat value={localizationData.summary?.keysWithPlaceholders ?? 0} label="With Placeholders" />
                        </div>

                    </div>

                </section>

                <div className={`container ${styles.content}`}>

                    <LocalizationSearch value={search} onChange={setSearch} />

                    <LocalizationFilters
                        usageFilter={usageFilter}
                        onUsageFilterChange={setUsageFilter}
                        documentationFilter={documentationFilter}
                        onDocumentationFilterChange={setDocumentationFilter}
                    />

                    <div className={styles.resultsHeader}>
                        {filteredEntries.length > 0 ? (
                            <span>
                                Showing <strong>{startIndex + 1}-{endIndex}</strong> of <strong>{filteredEntries.length}</strong> localization keys
                            </span>
                        ) : (
                            <span><strong>0</strong> localization keys</span>
                        )}
                    </div>

                    <div className={styles.entries}>

                        {visibleEntries.map((entry) => (
                            <LocalizationEntry key={entry.key} entry={entry} />
                        ))}

                        {filteredEntries.length === 0 && (
                            <div className={styles.emptyState}>
                                <h2>No localization keys found</h2>
                                <p>Try changing the search text or filters.</p>
                            </div>
                        )}

                    </div>

                    {filteredEntries.length > PAGE_SIZE && (
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    )}

                </div>

            </main>
        </Layout>
    );
}

function Stat({value, label}) {

    return (
        <div className={styles.stat}>
            <strong>{value}</strong>
            <span>{label}</span>
        </div>
    );
}


function Pagination({page, totalPages, onPageChange}) {

    const pages = getVisiblePages(page, totalPages);

    return (
        <nav className={styles.pagination} aria-label="Localization results pages">

            <button
                type="button"
                className={styles.pageButton}
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                Previous
            </button>

            <div className={styles.pageNumbers}>
                {pages.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        type="button"
                        className={`${styles.pageButton} ${pageNumber === page ? styles.activePage : ''}`}
                        aria-current={pageNumber === page ? 'page' : undefined}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>

            <button
                type="button"
                className={styles.pageButton}
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                Next
            </button>

        </nav>
    );
}

function getVisiblePages(page, totalPages) {

    const start = Math.max(1, Math.min(page - 2, totalPages - 4));
    const end = Math.min(totalPages, start + 4);

    return Array.from(
        {length: end - start + 1},
        (_, index) => start + index
    );
}
