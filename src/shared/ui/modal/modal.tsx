import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return createPortal(
    <>
      <div className={styles.container} onClick={onClose}></div>,{children}
    </>,
    document.body
  );
};
