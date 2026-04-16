import styles from "./featureCard.module.scss";

type FeatureCardProps = {
  body?: string;
  className?: string;
  ctaLabel?: string;
  nodeId?: string;
  title?: string;
};

const classNames = (...values: Array<string | false | null | undefined>) =>
  values.filter(Boolean).join(" ");

export function FeatureCard({
  body = "Njóttu kvöldverðar á Lava þar sem allt það besta í íslenskri matarhefð",
  className,
  ctaLabel = "Lesa meira",
  nodeId = "21:4",
  title = "Nýsköpunarvika 17.\ntil 21. maí",
}: FeatureCardProps) {
  const titleLines = title.split("\n");

  return (
    <article
      className={classNames(styles.featureCard, className)}
      data-node-id={nodeId}
    >
      <div className={styles.featureCard__artwork} data-node-id="25:12" />
      <div className={styles.featureCard__content} data-node-id="21:6">
        <div className={styles.featureCard__textStack} data-node-id="21:7">
          <h1 className={styles.featureCard__title} data-node-id="21:8">
            {titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.featureCard__body} data-node-id="21:9">
            {body}
          </p>
        </div>
        <button
          className={styles.featureCard__cta}
          data-node-id="21:10"
          type="button"
        >
          <span data-node-id="21:11">{ctaLabel}</span>
          <span className={styles.featureCard__ctaArrow} data-node-id="21:12">
            →
          </span>
        </button>
      </div>
    </article>
  );
}
