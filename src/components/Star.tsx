interface StarProps {
  value?: number;
  color: string | undefined;
  handleClick?: (value: number | undefined) => void;
  handleMouseEnter?: (value: number | undefined) => void;
  handleMouseLeave?: (value: number | undefined) => void;
  isFilled: boolean;
  clickable?: boolean;
}

function Star({
  value,
  color,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  isFilled,
  clickable,
}: StarProps) {
  let isClickable = "";
  if (clickable) {
    isClickable = "pointer";
  }
  return (
    <span
      className="Star"
      style={{ color, cursor: isClickable }}
      onClick={() => handleClick!(value)}
      onMouseEnter={() => handleMouseEnter!(value)}
      onMouseLeave={() => handleMouseLeave!(value)}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
}

export default Star;
