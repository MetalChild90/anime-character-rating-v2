import { FiMoreHorizontal } from "react-icons/fi";
import { RatingInterface } from "../../Interfaces";
import Box from "../shared/Box";
import useToggle from "../../hooks/useToggle";
import ActionsModal from "./ActionsModal";
import ItemScore from "./ItemScore";
import ItemImage from "./ItemImage";
import ItemReview from "./ItemReview";
import ItemData from "./ItemData";

interface RatingItemProps {
  item: RatingInterface;
}

const RatingItem = ({ item }: RatingItemProps) => {
  const [openModal, toggleOpenModal] = useToggle(false);
  const [showReview, toggleShowReview] = useToggle(false);

  return (
    <Box>
      <div className="Item-horizontalBox">
        <FiMoreHorizontal onClick={toggleOpenModal} />
        {openModal && (
          <ActionsModal
            toggleShowReview={toggleShowReview}
            toggleOpenModal={toggleOpenModal}
            item={item}
          />
        )}
      </div>
      <div className="Item">
        <ItemImage item={item} />
        <ItemScore value={item.score} />
        <ItemData item={item} />
        {showReview && (
          <ItemReview toggleShowReview={toggleShowReview} item={item} />
        )}
      </div>
    </Box>
  );
};

export default RatingItem;
