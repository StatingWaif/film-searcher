import React, { FC } from "react";
import { FullMovieInfo } from "../../types";
import { BASE_URL } from "../../consts";
import styles from "./movieInfo.module.css";
import { Rating } from "../../features/rating/rating";
import { capitalize } from "../../shared/utils/capitalize";

interface MovieInfoProps {
  movie: FullMovieInfo;
}
export const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={`${BASE_URL}/static/images/${movie.id}`}
      />
      <div className={styles.infoContainer}>
        <div className={styles.firstLine}>
          <span className={styles.title}>{movie.title}</span>
          <div className={styles.rating}>
            <Rating id={movie.id} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.lineContainer}>
            <span className={styles.infoTitles}>Жанр: </span>
            <span className={styles.infoText}>{capitalize(movie.genre)}</span>
          </div>
          <div className={styles.lineContainer}>
            <span className={styles.infoTitles}>Год выпуска: </span>
            <span className={styles.infoText}>{movie.release_year}</span>
          </div>
          <div className={styles.lineContainer}>
            <span className={styles.infoTitles}>Рейтинг: </span>
            <span className={styles.infoText}>{movie.rating}</span>
          </div>
          <div className={styles.lineContainer}>
            <span className={styles.infoTitles}>Описание</span>
          </div>
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};
