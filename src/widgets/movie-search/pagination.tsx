import React, { FC } from "react";
import { ArrowRight } from "./arrow-right";
import styles from "./pagination.module.css";
import classNames from "classnames";
import { ArrowRightDisabled } from "./arrow-right-disabled";
interface PaginationProps {
  page: number;
  handleClickLeft: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickRight: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  borders: [number, number];
}
export const Pagination: FC<PaginationProps> = ({
  page,
  handleClickLeft,
  handleClickRight,
  borders,
}) => {
  const [left, right] = borders;
  return (
    <div className={styles.container}>
      <button
        onClick={handleClickLeft}
        className={classNames(styles.button, styles.left)}
      >
        {page > left ? <ArrowRight /> : <ArrowRightDisabled />}
      </button>
      <span>{page}</span>
      <button onClick={handleClickRight} className={styles.button}>
        {page < right ? <ArrowRight /> : <ArrowRightDisabled />}
      </button>
    </div>
  );
};
