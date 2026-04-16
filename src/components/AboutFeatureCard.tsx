import styles from "@/components/AboutFeatureCard.module.scss";

type AboutFeatureCardProps = {
  body: string;
  ctaLabel: string;
  title: string;
};

export default function AboutFeatureCard({
  body,
  ctaLabel,
  title,
}: AboutFeatureCardProps) {
  return (
    <article className={styles["about-feature-card"]}>
      <div
        className={styles["about-feature-card__artwork"]}
        aria-hidden="true"
      />
      <div className={styles["about-feature-card__content"]}>
        <div className={styles["about-feature-card__text-stack"]}>
          <h3 className={styles["about-feature-card__title"]}>{title}</h3>
          <p className={styles["about-feature-card__body"]}>{body}</p>
        </div>
        <a className={styles["about-feature-card__cta"]} href="/about">
          <span>{ctaLabel}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
