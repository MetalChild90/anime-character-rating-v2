import { useState } from "react";
import Star from "../Star";

interface RatingProps {
  score: number;
  addScore: (newValue: number) => void;
}

function Rating({ addScore, score }: RatingProps) {
  const [dynamicValue, setDynamicValue] = useState(0);

  const colors = {
    1: "#f44336",
    2: "#FF5722",
    3: "#FF9800",
    4: "#FFC107",
    5: "#FFEB3B",
  };

  const meanings = {
    1: "Awful 🤮",
    2: "Don't care 😒",
    3: "Average 😐",
    4: "Good 🙂",
    5: "Fantastic 🔥",
  };

  const handleClick = (newValue: number) => {
    addScore(newValue);
  };

  const handleMouseEnter = (tempValue: number) => {
    setDynamicValue(tempValue);
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
          isFilled={i + 1 <= dynamicValue}
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

Rating.defaultProps = {
  score: 0,
};

export default Rating;
