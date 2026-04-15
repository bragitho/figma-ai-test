import styles from "@/components/SandboxCard.module.scss";

type SandboxCardProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

export default function SandboxCard({
  eyebrow,
  title,
  items,
}: SandboxCardProps) {
  return (
    <section className={styles.card} aria-labelledby="sandbox-card-title">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.header}>
        <h2 id="sandbox-card-title">{title}</h2>
        <span className={styles.badge}>SCSS Module</span>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
