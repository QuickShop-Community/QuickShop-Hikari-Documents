import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        QuickShop was designed to easy to use for players without any commands required for simple cases.
        Put the chest, click the it, enter the price and go to go!
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        QuickShop let your players focus in the game, No need to remember complicated commands, Right-Click the sign and use Control Panel to edit shop properties.
        In complex situations, auto-completion can also help players complete commands quickly.
      </>
    ),
  },
  {
    title: 'Powered by Love and Cat paws',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        QuickShop-Hikari is a open-source and free software, try the most great shop plugin in Bukkit community without pay for it.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
