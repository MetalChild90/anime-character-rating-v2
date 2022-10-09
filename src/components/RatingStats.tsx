import { useContext } from "react";
import { RatingContext } from "../context/RatingContext";

interface ImageObject {
  file: string;
  name: string;
}

interface Rating {
  id?: string;
  name: string;
  anime: string;
  review: string;
  score: number;
  image: ImageObject | null;
}

function RatingStats() {
  const { ratings, reverse } = useContext(RatingContext);

  let average =
    ratings.reduce((acc: number, cur: Rating) => {
      return acc + cur.score;
    }, 0) / ratings.length;

  average = Number(average.toFixed(1).replace(/[.,]0$/, ""));

  return (
    <div className={`Stats ${reverse && "reversed"}`}>
      <span>Rated characters: {ratings.length}</span>
      <span>Average score: {isNaN(average) ? 0 : average}</span>
    </div>
  );
}

export default RatingStats;
