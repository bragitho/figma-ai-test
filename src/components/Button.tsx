import type { ButtonHTMLAttributes } from "react";
import styles from "@/components/Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function Button({
  label,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      type={type}
      {...rest}
    >
      {label}
    </button>
  );
}
