import Head from "next/head";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blami Bistro Three Section Layout</title>
        <meta
          name="description"
          content="Implementation of the Blami Bistro three section layout from Figma."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <section className={styles.home__panel}>
          <section className={styles.home__section} data-node-id="66:12">
            <h1 className={styles.home__sectionTitle} data-node-id="66:13">
              Top Section
            </h1>
            <div className={styles.home__topRow} data-node-id="66:14">
              <FeatureCard
                body="A featured content card placed on the left side of the top section."
                className={styles.home__featureCard}
                ctaLabel="Learn more"
                nodeId="66:15"
                title="Feature Card"
              />
              <article className={styles.home__textBox} data-node-id="66:24">
                <p className={styles.home__textBoxEyebrow} data-node-id="66:25">
                  Text Box
                </p>
                <h2 className={styles.home__textBoxTitle} data-node-id="66:26">
                  Right-hand content area
                </h2>
                <p className={styles.home__textBoxBody} data-node-id="66:27">
                  This area can hold supporting copy, stats, or descriptive
                  content beside the feature card.
                </p>
              </article>
            </div>
          </section>
          <section className={styles.home__section}>
            <h2 className={styles.home__sectionTitle} data-node-id="66:28">
              Middle Section
            </h2>
            <div className={styles.home__middleRow} data-node-id="66:29">
              <div className={styles.home__buttonColumn} data-node-id="66:30">
                <Button label="Button One" nodeId="66:31" />
              </div>
              <div className={styles.home__buttonColumn} data-node-id="66:33">
                <Button label="Button Two" nodeId="66:34" />
              </div>
              <div className={styles.home__buttonColumn} data-node-id="66:36">
                <Button label="Button Three" nodeId="66:37" />
              </div>
            </div>
          </section>
          <section className={styles.home__section}>
            <h2 className={styles.home__sectionTitle} data-node-id="66:39">
              Bottom Section
            </h2>
            <div className={styles.home__bottomRow} data-node-id="66:40">
              <FeatureCard
                body="Bottom left feature card."
                className={styles.home__featureCard}
                ctaLabel="Read more"
                nodeId="66:41"
                title="Feature Card A"
              />
              <FeatureCard
                body="Bottom right feature card."
                className={styles.home__featureCard}
                ctaLabel="Read more"
                nodeId="66:50"
                title="Feature Card B"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
