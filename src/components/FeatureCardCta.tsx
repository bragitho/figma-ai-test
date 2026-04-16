import styles from "./featureCardCta.module.scss";

type FeatureCardCtaProps = {
  className?: string;
  label?: string;
  nodeId?: string;
};

const classNames = (...values: Array<string | false | null | undefined>) =>
  values.filter(Boolean).join(" ");

export function FeatureCardCta({
  className,
  label = "Lesa meira",
  nodeId = "21:10",
}: FeatureCardCtaProps) {
  return (
    <button
      className={classNames(styles.featureCardCta, className)}
      data-node-id={nodeId}
      type="button"
    >
      <span className={styles.featureCardCta__label} data-node-id="21:11">
        {label}
      </span>
      <span className={styles.featureCardCta__arrow} data-node-id="21:12">
        →
      </span>
    </button>
  );
}
