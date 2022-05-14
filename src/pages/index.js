import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">What is {siteConfig.title}?</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/quickstart">
            Quickstart - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.block}>
          <div className="container">
            <div className="row">
              <div className={clsx('col')}>
                <div className="text--center padding-horiz--md">
                  <h3>You can make it!</h3>
                  <p>
                    <div className={styles.youtube}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/_An9EsKPhp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.block}>
          <div className="container">
            <div className="row">
              <div className={clsx('col')}>
                <div className="text--center padding-horiz--md">
                  <h3>License</h3>
                  <p>Apache License 2.0</p>
                </div>
              </div>
              <div className={clsx('col')}>
                <div className="text--center padding-horiz--md">
                  <h3>Feedback</h3>
                  <p>
                    <div><a href="">GitHub Issues</a></div>
                  </p>
                </div>
              </div>
              <div className={clsx('col')}>
                <div className="text--center padding-horiz--md">
                  <h3>Used by</h3>
                  <p>
                    <div><a href="">XXXXXXXX</a></div>
                    <div><a href="">XXXXXXXX</a></div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}