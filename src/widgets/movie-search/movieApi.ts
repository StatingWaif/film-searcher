import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../consts";
import { FullMovieInfo, ShortMovieInfo } from "../../types";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<
      { search_result: ShortMovieInfo[]; total_pages: number },
      { title: string; genre: string; release_year: string; page: number }
    >({
      query: ({ title, genre, release_year, page }) => {
        const filters: {
          title?: string;
          genre?: string;
          release_year?: string;
          limit: number;
          page: number;
        } = { limit: 10, page };
        if (title) {
          filters.title = title;
        }
        if (genre && genre !== "0") {
          filters.genre = genre;
        }
        if (release_year && release_year !== "0") {
          filters.release_year = release_year;
        }
        return {
          url: "api/v1/search/",
          params: filters,
        };
      },
    }),
    getMovieById: builder.query<FullMovieInfo, string>({
      query: (id) => `/api/v1/movie/${id}`,
    }),
  }),
});
export const { useGetMoviesQuery, useGetMovieByIdQuery } = movieApi;
