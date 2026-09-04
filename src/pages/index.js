import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const docAreas = [
  {
    eyebrow: 'START HERE',
    title: 'Getting Started',
    description: 'Install QuickShop Hikari and get your first shop running.',
    to: '/docs/setup/install',
    icon: '01',
  },
  {
    eyebrow: 'CONFIGURE',
    title: 'Documentation',
    description: 'Browse configuration, commands, permissions, shops, and administration guides.',
    to: '/docs/intro',
    icon: '02',
  },
  {
    eyebrow: 'EXTEND',
    title: 'Addons',
    description: 'Discover addons that extend QuickShop Hikari with additional functionality.',
    to: '/docs/category/addon',
    icon: '03',
  },
  {
    eyebrow: 'INTEGRATE',
    title: 'Compatibility',
    description: 'Find compatibility modules and integration information for your server stack.',
    to: '/docs/category/compatibility-modules',
    icon: '04',
  },
];

const quickLinks = [
  { label: 'Installation', to: '/docs/setup/install' },
  { label: 'Browse all docs', to: '/docs/intro' },
  { label: 'QuickShop Hikari website', href: 'https://quickshophikari.org/en' },
  { label: 'Project on GitHub', href: 'https://github.com/QuickShop-Community/QuickShop-Hikari' },
];

export default function Home() {
  const logo = useBaseUrl('img/quickshop-hikari-logo.webp');

  return (
    <Layout
      title="Documentation"
      description="Official documentation for QuickShop Hikari."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlowOne} aria-hidden="true" />
          <div className={styles.heroGlowTwo} aria-hidden="true" />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                OFFICIAL DOCUMENTATION
              </div>

              <h1>
                Build better shops with
                <span> QuickShop Hikari.</span>
              </h1>

              <p className={styles.lead}>
                Everything you need to install, configure, customize, and extend
                QuickShop Hikari on your Minecraft server.
              </p>

              <div className={styles.actions}>
                <Link className={styles.primaryButton} to="/docs/setup/install">
                  Get Started
                  <span aria-hidden="true">→</span>
                </Link>

                <Link className={styles.secondaryButton} to="/docs/intro">
                  Browse Documentation
                </Link>
              </div>

              <div className={styles.quickLinks} aria-label="Quick links">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    className={styles.quickLink}
                    to={item.to}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.logoCard}>
                <div className={styles.logoHalo} aria-hidden="true" />
                <img src={logo} alt="QuickShop Hikari" />
              </div>

              <div className={styles.visualSparkleOne} aria-hidden="true">✦</div>
              <div className={styles.visualSparkleTwo} aria-hidden="true">✦</div>
            </div>
          </div>
        </section>

        <section className={styles.docsSection}>
          <div className={styles.sectionHeading}>
            <div>
              <div className={styles.sectionEyebrow}>DOCUMENTATION</div>
              <h2>Find what you need.</h2>
            </div>
            <p>
              Jump into the most common documentation areas, or use search in
              the navigation bar to find a specific topic.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {docAreas.map((area) => (
              <Link key={area.title} className={styles.docCard} to={area.to}>
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>{area.icon}</span>
                  <span className={styles.cardEyebrow}>{area.eyebrow}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <span className={styles.cardArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div>
            <div className={styles.helpEyebrow}>NEED MORE HELP?</div>
            <h2>Documentation is only one part of the community.</h2>
            <p>
              Visit the main QuickShop Hikari site or join the community when
              you need releases, project information, or support resources.
            </p>
          </div>
          <div className={styles.helpActions}>
            <Link
              className={styles.helpPrimary}
              href="https://quickshophikari.org/en"
            >
              Visit Main Site
            </Link>
            <Link
              className={styles.helpSecondary}
              href="https://discord.gg/Bu3dVtmsD3"
            >
              Join Discord
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
