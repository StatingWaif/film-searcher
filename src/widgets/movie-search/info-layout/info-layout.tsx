import React, { FC, ReactNode } from "react";
import styles from "./infoLayout.module.css";
interface InfoLayoutProps {
  children: ReactNode;
}
export const InfoLayout: FC<InfoLayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
