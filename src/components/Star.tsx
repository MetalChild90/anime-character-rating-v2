interface Props {
  value: number;
  color: string;
  handleClick: (value: number) => void;
  handleMouseEnter: (value: number) => void;
  handleMouseLeave: (value: number) => void;
  isFilled: boolean;
  clickable: boolean;
}

function Star({
  value,
  color,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  isFilled,
  clickable,
}: Props) {
  return (
    <span
      className="Star"
      style={{ color, cursor: clickable && "pointer" }}
      onClick={() => handleClick(value)}
      onMouseEnter={() => handleMouseEnter(value)}
      onMouseLeave={() => handleMouseLeave(value)}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
}

export default Star;
