import styles from "./button.module.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonVisualState = "default" | "hover" | "pressed" | "focus" | "disabled";

type ButtonProps = {
  className?: string;
  label?: string;
  nodeId?: string;
  variant?: ButtonVariant;
  visualState?: ButtonVisualState;
};

const classNames = (...values: Array<string | false | null | undefined>) =>
  values.filter(Boolean).join(" ");

export function Button({
  className,
  label = "Reserve table",
  nodeId,
  variant = "primary",
  visualState = "default",
}: ButtonProps) {
  const isDisabled = visualState === "disabled";
  const isInteractive = visualState === "default";

  return (
    <button
      className={classNames(
        styles.button,
        className,
        styles[`button--${variant}`],
        styles[`button--${visualState}`],
        isInteractive && styles["button--interactive"],
      )}
      data-node-id={nodeId}
      disabled={isDisabled}
      type="button"
    >
      <span className={styles.button__label}>{label}</span>
    </button>
  );
}
