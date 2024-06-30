import { FC, useState } from "react";
import styles from "./input.module.css";
interface InputProps {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  handleChange,
  initialValue,
}) => {
  const [value, setValue] = useState<string>(initialValue ?? "");
  return (
    <input
      value={value}
      className={styles.input}
      placeholder={placeholder}
      onChange={(event) => {
        setValue(event.target.value);
        handleChange(event);
      }}
    />
  );
};
