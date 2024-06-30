import React, { FC, useState } from "react";
import { StarGrey } from "./icons/star-grey";
import { StarOrange } from "./icons/star-orange";
import styles from "./rating.module.css";
import { StarOutline } from "./icons/star-outline";
import { useSelector } from "react-redux";
import { RootState } from "../../widgets/movie-search/store";

interface RatingProps {
  id: string;
}

export const Rating: FC<RatingProps> = ({ id }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const setRating = (movieId: string, rating: number) => {
    const ratings = localStorage.getItem("ratings");
    const newObj = ratings ? { ...JSON.parse(ratings) } : {};
    newObj[movieId] = rating;
    localStorage.setItem("ratings", JSON.stringify(newObj));
  };

  const userRating = (movieId: string) => {
    const ratings = localStorage.getItem("ratings");
    const result = ratings ? JSON.parse(ratings)[movieId] : 0;
    return result;
  };

  const [starRating, setStarRating] = useState<number>(userRating(id));
  const [hover, setHover] = useState<number>(0);
  const maxRating = 5;

  return (
    <div className={styles.container}>
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label
            key={index}
            className={styles.rating}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            onClick={(event) => {
              event.stopPropagation();
              if (isAuth) {
                setStarRating(ratingValue);
                setRating(id, ratingValue);
              }
            }}
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className={styles.input}
            />
            <div>
              {hover ? (
                ratingValue <= hover ? (
                  <StarGrey />
                ) : (
                  <StarOutline />
                )
              ) : ratingValue <= starRating ? (
                <StarOrange />
              ) : (
                <StarOutline />
              )}
            </div>
            <span
              className={
                ratingValue > starRating && ratingValue > hover
                  ? styles.greyNumber
                  : undefined
              }
            >
              {ratingValue}
            </span>
          </label>
        );
      })}
    </div>
  );
};
