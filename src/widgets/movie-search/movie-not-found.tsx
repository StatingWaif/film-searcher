import styles from "./movieNotFound.module.css";
export const MovieNotFound = () => {
  return (
    <>
      <span className={styles.title}>Фильмы не найдены</span>
      <span className={styles.description}>
        Измените запрос и попробуйте снова
      </span>
    </>
  );
};
