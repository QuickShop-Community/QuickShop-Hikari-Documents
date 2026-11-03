import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Icon from './Icons';
import styles from './index.module.css';

const highlights = [
  {icon:'bolt',title:'Getting Started',description:'Install the plugin, set it up, and create your first shop.',to:'/docs/setup/install'},
  {icon:'settings',title:'Configuration',description:'Learn plugin settings and customization options.',to:'/docs/modules/economy-formatter'},
  {icon:'code',title:'Developer API',description:'Explore integration resources and extension examples.',to:'/docs/development/01-getting-start'},
  {icon:'users',title:'Guides & Examples',description:'Step-by-step guides for your Minecraft server.',to:'/docs/guides'},
];
const areas = [
  {icon:'rocket',title:'Getting Started',description:'Installation, setup, and your first shop.',to:'/docs/setup/install'},
  {icon:'sliders',title:'Configuration',description:'Settings, commands, permissions, and customization.',to:'/docs/modules/economy-formatter'},
  {icon:'cart',title:'Shop Management',description:'Creating shops, managing prices, and trading.',to:'/docs/modules/shops/shop-basic'},
  {icon:'code',title:'Developer Resources',description:'Developer guides, APIs, and examples.',to:'/docs/development/01-getting-start'},
  {icon:'puzzle',title:'Addons & Integrations',description:'Addons and compatibility modules.',to:'/docs/category/integrations'},
  {icon:'wrench',title:'Troubleshooting',description:'Find solutions and community support.',to:'/docs/faq/frequently-asked-questions'},
];
const links = [
  {icon:'github',title:'GitHub Repository',href:'https://github.com/QuickShop-Community/QuickShop-Hikari'},
  {icon:'discord',title:'Community Discord',href:'https://discord.gg/Bu3dVtmsD3'},
  {icon:'modrinth',title:'Latest Releases',href:'https://modrinth.com/plugin/quickshop-hikari/versions'},
  {icon:'changelog',title:'Changelog',to:'/docs/changelogs/6.3.0.0'},
];
export default function Home() {
  const logo=useBaseUrl('img/quickshop-hikari-logo.webp');
  return <Layout title="Documentation" description="QuickShop Hikari documentation, guides, configuration and developer resources.">
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>QuickShop Hikari<br/><em>Documentation</em></h1>
          <p>Complete guides, configuration, and developer resources for QuickShop Hikari — a powerful chest shop plugin for PaperMC.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/docs/setup/install">Get Started <Icon name="arrow" size={20}/></Link>
            <Link className={styles.secondary} href="https://github.com/QuickShop-Community/QuickShop-Hikari">View on GitHub <Icon name="github" size={20}/></Link>
            <Link className={styles.secondary} href="https://modrinth.com/plugin/quickshop-hikari/versions">Download <Icon name="download" size={20}/></Link>
          </div>
        </div>
        <div className={styles.heroArt}><div className={styles.diamond}/><img src={logo} alt="QuickShop Hikari logo" /></div>
      </section>
      <section className={styles.highlights} aria-label="Documentation highlights">
        {highlights.map(item=><Link key={item.title} to={item.to} className={styles.highlight}>
          <span className={styles.highlightIcon}><Icon name={item.icon} size={28}/></span><span><strong>{item.title}</strong><small>{item.description}</small></span>
        </Link>)}
      </section>
      <section className={styles.section}>
        <h2>Browse the Documentation</h2><p className={styles.sectionLead}>Find everything you need to install, configure, and extend QuickShop Hikari.</p>
        <div className={styles.areaGrid}>{areas.map(item=><Link key={item.title} to={item.to} className={styles.area}>
          <span className={styles.areaIcon}><Icon name={item.icon} size={31}/></span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className={styles.arrow}><Icon name="arrow" size={23}/></span>
        </Link>)}</div>
      </section>
      <section className={styles.section}><h2>Quick Links</h2><div className={styles.linksGrid}>
        {links.map(item=><Link key={item.title} to={item.to} href={item.href} className={styles.quickLink}><span className={styles.brandIcon}><Icon name={item.icon} size={27}/></span><strong>{item.title}</strong><span className={styles.arrow}><Icon name="external" size={18}/></span></Link>)}
      </div></section>
    </main>
  </Layout>;
}
