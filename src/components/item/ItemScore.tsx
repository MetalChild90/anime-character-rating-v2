import Star from "../Star";

interface ItemScoreProps {
  value?: number;
}

function ItemScore({ value }: ItemScoreProps) {
  const colors: string[] = [
    "#f44336",
    "#FF5722",
    "#FF9800",
    "#FFC107",
    "#FFEB3B",
  ];
  return (
    <div className="Item-scoreBox">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i + 1} color={colors[value!]} isFilled={i + 1 <= value!} />
      ))}
    </div>
  );
}

export default ItemScore;
