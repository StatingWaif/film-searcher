import { Header } from "../widgets/header";
import styles from "./MoviePage.module.css";
import { MovieInfo } from "../widgets/movie-info/movie-info";
import { useParams } from "react-router-dom";
import { Actors } from "../widgets/actors";
import { useGetMovieByIdQuery } from "../shared/store/movieApi";

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
