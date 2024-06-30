import { FC, ReactNode } from "react";
import styles from "./button.module.css";
import classNames from "classnames";
interface ButtonProps {
  variant?: "main" | "outlined";
  children: ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  variant = "main",
  onClick,
  children,
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        variant === "outlined" && styles.buttonOutlined
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
