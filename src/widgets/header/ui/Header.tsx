import { useState } from "react";
import { Button } from "../../../shared/ui/button";
import styles from "./header.module.css";
import { AuthModal } from "../../auth-modal/auth-modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../avatar";
import { RootState } from "../../../shared/store/store";
import { logout } from "../../../shared/store/authSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <span onClick={() => navigate("/")} className={styles.logo}>
        Фильмопоиск
      </span>
      <span className={styles.authData}>
        {isAuth && <Avatar />}
        <Button
          onClick={() => {
            if (isAuth) {
              dispatch(logout());
            } else {
              setModalOpened(!modalOpened);
            }
          }}
          variant={isAuth ? "outlined" : "main"}
        >
          {isAuth ? "Выйти" : "Войти"}
        </Button>
        {modalOpened && <AuthModal onClose={() => setModalOpened(false)} />}
      </span>
    </header>
  );
};
