import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../shared/ui/modal/modal";
import { Input } from "../../shared/ui/input";
import styles from "./authModal.module.css";
import { Button } from "../../shared/ui/button";
import { Cross } from "./cross";
import { BASE_URL } from "../../consts";
import { useDispatch } from "react-redux";
import { login } from "../movie-search/authSlice";
interface AuthModalProps {
  onClose: () => void;
}
export const AuthModal: FC<AuthModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <Modal onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.firstLine}>
          <span className={styles.title}>Авторизация</span>
          <button className={styles.cross} onClick={onClose}>
            <Cross />
          </button>
        </div>
        <div className={styles.fields}>
          <div className={styles.inputContainer}>
            <label>Логин</label>
            <Input
              placeholder="Введите логин"
              handleChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Пароль</label>
            <Input
              placeholder="Введите пароль"
              handleChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => {
                fetch(BASE_URL + "/api/v1/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ username, password }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    localStorage.setItem("token", data.token);
                    dispatch(login());
                    onClose();
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              }}
            >
              Войти
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Отменить
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
