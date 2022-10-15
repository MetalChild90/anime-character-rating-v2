import { useState } from "react";
import Star from "../Star";

interface StarRatingProps {
  score: number;
  addScore: (newValue: number) => void;
}

function StarRating({ addScore, score = 0 }: StarRatingProps) {
  const [dynamicValue, setDynamicValue] = useState<number>(0);

  const colors: string[] = [
    "#f44336",
    "#FF5722",
    "#FF9800",
    "#FFC107",
    "#FFEB3B",
  ];

  const meanings: string[] = [
    "Awful 🤮",
    "Don't care 😒",
    "Average 😐",
    "Good 🙂",
    "Fantastic 🔥",
  ];

  const handleClick = (newValue: number | undefined) => {
    addScore(newValue!);
  };

  const handleMouseEnter = (tempValue: number | undefined) => {
    setDynamicValue(tempValue!);
  };

  const handleMouseLeave = () => {
    setDynamicValue(score);
  };

  return (
    <div className="Rating">
      <p>{score ? meanings[score] : "Not Rated Yet"}</p>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          color={colors[score]}
          isFilled={i + 1 <= dynamicValue!}
          value={i + 1}
          handleClick={handleClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          clickable={true}
        />
      ))}
    </div>
  );
}

export default StarRating;
