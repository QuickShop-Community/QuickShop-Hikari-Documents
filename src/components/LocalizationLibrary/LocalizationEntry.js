import React from 'react';

import styles from './LocalizationLibrary.module.css';

export default function LocalizationEntry({entry}) {

    const documentation = entry.documentation ?? {};

    return (
        <article id={entry.key} className={styles.entry}>

            <div className={styles.entryHeader}>

                <div>
                    <code className={styles.key}>{entry.key}</code>

                    {documentation.description && (
                        <p className={styles.description}>
                            {documentation.description}
                        </p>
                    )}
                </div>

                <div className={styles.badges}>
                    {entry.status.hasGuiUsage && <Badge>GUI</Badge>}
                    {entry.status.hasJavaUsage && <Badge>Java</Badge>}
                    {entry.status.documented && <Badge>Documented</Badge>}
                </div>

            </div>

            {entry.translation && (
                <section className={styles.section}>

                    <h3>Default message</h3>

                    <pre className={styles.translation}>
                        {entry.translation.raw}
                    </pre>

                    {entry.translation.plain !== entry.translation.raw && (
                        <div className={styles.plainText}>
                            <span>Plain text</span>
                            <code>{entry.translation.plain}</code>
                        </div>
                    )}

                </section>
            )}

            {entry.placeholders?.length > 0 && (
                <section className={styles.section}>

                    <h3>Placeholders</h3>

                    <div className={styles.placeholderList}>
                        {entry.placeholders.map((placeholder) => (
                            <div key={placeholder} className={styles.placeholder}>
                                <code>{'{' + placeholder + '}'}</code>

                                {documentation.placeholders?.[placeholder] && (
                                    <span>{documentation.placeholders[placeholder]}</span>
                                )}
                            </div>
                        ))}
                    </div>

                </section>
            )}

            {entry.usages?.length > 0 && (
                <section className={styles.section}>

                    <h3>Used in</h3>

                    <div className={styles.usageList}>
                        {entry.usages.map((usage, index) => (
                            <Usage
                                key={`${usage.type}-${usage.file}-${usage.line}-${index}`}
                                usage={usage}
                            />
                        ))}
                    </div>

                </section>
            )}

            {entry.warnings?.length > 0 && (
                <section className={styles.warnings}>
                    {entry.warnings.map((warning) => (
                        <div
                            key={`${warning.type}-${warning.message}`}
                            className={styles.warning}
                        >
                            <strong>{warning.type}</strong>
                            <span>{warning.message}</span>
                        </div>
                    ))}
                </section>
            )}

        </article>
    );
}

function Usage({usage}) {

    return (
        <div className={styles.usage}>

            <div className={styles.usageType}>
                {usage.type}
            </div>

            <div>
                {usage.gui && <strong>{usage.gui}</strong>}
                {usage.className && <strong>{usage.className}</strong>}
                {usage.configPath && <code>{usage.configPath}</code>}

                <span className={styles.source}>
                    {usage.file}:{usage.line}
                </span>
            </div>

        </div>
    );
}

function Badge({children}) {

    return (
        <span className={styles.badge}>
            {children}
        </span>
    );
}
