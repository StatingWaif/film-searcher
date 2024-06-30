import { FC } from "react";
import styles from "./movie.module.css";
import { BASE_URL } from "../../consts";
import { Rating } from "../../features/rating/rating";
import { capitalize } from "../../shared/utils/capitalize";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  movie: {
    id: string;
    title: string;
    description: string;
    release_year: number;
    poster: string; //base64 img
    genre: string;
    rating: string; //float
  };
}

export const Movie: FC<MovieProps> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.movie}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={`${BASE_URL}/static/images/${movie.id}`}
        className={styles.img}
      />
      <div className={styles.middlePart}>
        <p className={styles.title}>{movie.title}</p>
        <div className={styles.infoContainer}>
          <p className={styles.infoTitle}>Жанр</p>
          <p>{capitalize(movie.genre)}</p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infoTitle}>Год выпуска</p>
          <p>{movie.release_year}</p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infoTitle}>Описание</p>
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
      <div className={styles.rating}>
        <Rating id={movie.id} />
      </div>
    </div>
  );
};
