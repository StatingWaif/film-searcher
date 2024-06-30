import { Input } from "../../shared/ui/input";
import { Filter } from "../filter";
import styles from "./movieSearch.module.css";
import { Movies } from "./movies/movies";
import { useGetMoviesQuery } from "./movieApi";
import { useEffect, useState } from "react";
import { Pagination } from "./pagination";
import { MovieNotFound } from "./movie-not-found";
import { Loader } from "../../shared/ui/loader/loader";
import { InfoLayout } from "./info-layout/info-layout";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [titleValue, setTitleValue] = useState<string>(
    searchParams.get("title") ?? ""
  );
  const [genreValue, setGenreValue] = useState<string>(
    searchParams.get("genre") ?? ""
  );
  const [releaseYear, setReleaseYear] = useState<string>(
    searchParams.get("release_year") ?? ""
  );
  let paramPage = Number(searchParams.get("page"));
  paramPage = Math.max(1, paramPage);
  const [page, setPage] = useState<number>(paramPage ?? 1);
  const debouncedTitle = useDebounce(titleValue, 500);
  const { data, isLoading, error } = useGetMoviesQuery(
    {
      title: debouncedTitle,
      genre: genreValue,
      release_year: releaseYear,
      page,
    },
    { skip: debouncedTitle !== titleValue }
  );

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    genreValue && newSearchParams.set("genre", genreValue);
    releaseYear && newSearchParams.set("release_year", releaseYear);
    titleValue && newSearchParams.set("title", titleValue);
    page && newSearchParams.set("page", String(page));
    setSearchParams(newSearchParams.toString());
  }, [
    titleValue,
    genreValue,
    releaseYear,
    page,
    searchParams,
    setSearchParams,
  ]);

  return (
    <div className={styles.layout}>
      <Filter
        handleGenreChange={setGenreValue}
        handleYearChange={setReleaseYear}
        year={releaseYear}
        genre={genreValue}
      />
      <div className={styles.container}>
        <Input
          initialValue={titleValue}
          placeholder="Название фильма"
          handleChange={(event) => setTitleValue(event.target.value)}
        />
        {data ? (
          data.total_pages ? (
            <>
              <Movies movies={data.search_result} />
              <Pagination
                page={page}
                handleClickLeft={() =>
                  setPage((value) => (value > 1 ? --value : value))
                }
                handleClickRight={() =>
                  setPage((value) =>
                    value < data.total_pages ? ++value : value
                  )
                }
                borders={[1, data.total_pages]}
              />
            </>
          ) : (
            <InfoLayout>
              <MovieNotFound />
            </InfoLayout>
          )
        ) : isLoading ? (
          <InfoLayout>
            <Loader />
          </InfoLayout>
        ) : error ? (
          <div>Error</div>
        ) : null}
      </div>
    </div>
  );
};
