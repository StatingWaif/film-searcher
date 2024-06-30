import { Header } from "../widgets/header";
import { useGetMovieByIdQuery } from "../widgets/movie-search/movieApi";
import styles from "./MoviePage.module.css";
import { MovieInfo } from "../widgets/movie-info/movie-info";
import { useParams } from "react-router-dom";
import { Actors } from "../widgets/actors";

export const MoviePage = () => {
  const { id } = useParams();
  const { data } = useGetMovieByIdQuery(id);
  return (
    <div>
      <Header />
      {!!data && (
        <div className={styles.container}>
          <MovieInfo movie={data} />
          <Actors actors={data.actors} />
        </div>
      )}
    </div>
  );
};
