import { FC, useState } from "react";
import styles from "./dropdown.module.css";
import classNames from "classnames";
import { ArrowSquareDown } from "./arrow-square-down";

interface DropdownProps {
  title: string;
  placeholder: string;
  map: { [key: string]: string };
  onChange: (value: string) => void;
  value?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  title,
  placeholder,
  map,
  onChange,
  value,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(value ?? "");

  const options = Object.entries(map);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setOpened(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <label>{title}</label>
      <div
        className={styles.dropdown}
        onClick={() => setOpened(!opened)}
        tabIndex={0}
      >
        <div className={styles.dropdownHeader}>
          {selectedValue ? map[selectedValue] : placeholder}
          <button
            className={classNames(styles.arrow, opened && styles.rotated)}
          >
            <ArrowSquareDown />
          </button>
        </div>
        {opened && (
          <ul className={styles.dropdownList}>
            {options.map(([optionKey, optionValue], index) => (
              <li
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleSelect(optionKey)}
              >
                {optionValue}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
