import styles from "./filter.module.css";
import { FC } from "react";
import { GENRES, YEARS } from "../../../consts";
import { Dropdown } from "../../../shared/ui/dropdown/dropdown";

interface FilterProps {
  handleGenreChange: (value: string) => void;
  handleYearChange: (value: string) => void;
  year?: string;
  genre?: string;
}

export const Filter: FC<FilterProps> = ({
  handleGenreChange,
  handleYearChange,
  year,
  genre,
}) => {
  return (
    <div className={styles.filter}>
      <p className={styles.subName}>Фильтр</p>

      <Dropdown
        title="Жанр"
        placeholder="Выберите жанр"
        onChange={handleGenreChange}
        map={GENRES}
        value={genre}
      />
      <Dropdown
        title="Год выпуска"
        placeholder="Выберите год"
        onChange={handleYearChange}
        map={YEARS}
        value={year}
      />
    </div>
  );
};
