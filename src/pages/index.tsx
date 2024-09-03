import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import HeroImage from '@site/static/img/logo.png';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
          <img src={HeroImage} alt="GeyserExtras Logo" className={styles.heroImage}/>
          <img src={HeroImage} alt="GeyserExtras Logo" className={styles.heroImageBackgroundBlur}/>
          <div className={styles.textSection}>
              <Heading as="h1" className="hero__title">
                  <Translate id='pages.main.title'>GeyserExtras</Translate>
              </Heading>
              <p className="hero__subtitle">
                  <Translate id='pages.main.subtitle'>A GeyserMC extension which attempts to unify features for Bedrock Edition players on Java Edition Servers.</Translate>
              </p>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
