import { FC } from "react";
import styles from "./actors.module.css";
interface ActorsProps {
  actors: {
    name: string;
    photo: string;
  }[];
}

export const Actors: FC<ActorsProps> = ({ actors }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Актёры</span>
      <div className={styles.actorsContainer}>
        {actors.map((actor, index) => (
          <div className={styles.actor} key={index}>
            <img
              className={styles.img}
              src={actor.photo}
              alt={`${actor.name} photo`}
            />
            <span className={styles.name}>{actor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
