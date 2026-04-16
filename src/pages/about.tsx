import Head from "next/head";
import AboutFeatureCard from "@/components/AboutFeatureCard";
import Button from "@/components/Button";
import styles from "@/pages/about.module.scss";

const topCard = {
  title: "Feature Card",
  body: "A featured content card placed on the left side of the top section.",
  ctaLabel: "Learn more",
};

const bottomCards = [
  {
    title: "Feature Card A",
    body: "Bottom left feature card.",
    ctaLabel: "Read more",
  },
  {
    title: "Feature Card B",
    body: "Bottom right feature card.",
    ctaLabel: "Read more",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Figma Test</title>
        <meta
          name="description"
          content="About page built from the Three Section Auto Layout Figma design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles["about-page"]}>
        <div className={styles["about-page__frame"]}>
          <h1 className={styles["about-page__section-title"]}>Top Section</h1>
          <section
            className={`${styles["about-page__row"]} ${styles["about-page__row--top"]}`}
          >
            <AboutFeatureCard {...topCard} />
            <article
              className={`${styles["about-page__panel"]} ${styles["about-page__panel--copy"]}`}
            >
              <p className={styles["about-page__panel-label"]}>Text Box</p>
              <h2 className={styles["about-page__panel-title"]}>
                Right-hand content area
              </h2>
              <p className={styles["about-page__panel-body"]}>
                This area can hold supporting copy, stats, or descriptive
                content beside the feature card.
              </p>
            </article>
          </section>

          <h2 className={styles["about-page__section-title"]}>
            Middle Section
          </h2>
          <section className={styles["about-page__row"]}>
            <div className={styles["about-page__column"]}>
              <Button label="Button One" />
            </div>
            <div className={styles["about-page__column"]}>
              <Button label="Button Two" />
            </div>
            <div className={styles["about-page__column"]}>
              <Button label="Button Three" />
            </div>
          </section>

          <h2 className={styles["about-page__section-title"]}>
            Bottom Section
          </h2>
          <section
            className={`${styles["about-page__row"]} ${styles["about-page__row--bottom"]}`}
          >
            {bottomCards.map((card) => (
              <AboutFeatureCard key={card.title} {...card} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
