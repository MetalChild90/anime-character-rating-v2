import Box from "../shared/Box";

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

interface Props {
  item: Rating;
  toggleShowReview: () => void;
}

function ItemReview({ toggleShowReview, item }: Props) {
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
