import Box from "../shared/Box";
import { RatingInterface } from "../../Interfaces";

interface ItemReviewProps {
  item: RatingInterface;
  toggleShowReview: () => void;
}

function ItemReview({ toggleShowReview, item }: ItemReviewProps) {
  return (
    <div className="Item-review">
      <span className="Item-closeReview" onClick={toggleShowReview}>
        &times;
      </span>
      <Box bgColor="#796b93">{item.review}</Box>
    </div>
  );
}

export default ItemReview;
