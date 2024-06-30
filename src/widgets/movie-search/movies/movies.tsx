import React, { FC } from "react";
import { Movie } from "../../../entities/movie";
import styles from "./movies.module.css";

interface MoviesProps {
  movies: {
    id: string;
    title: string;
    description: string;
    release_year: number;
    poster: string; //base64 img
    genre: string;
    rating: string; //float
  }[];
}

export const Movies: FC<MoviesProps> = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  );
};
