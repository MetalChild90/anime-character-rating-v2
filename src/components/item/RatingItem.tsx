import { FiMoreHorizontal } from "react-icons/fi";
import PropTypes from "prop-types";
import Box from "../shared/Box";
import useToggle from "../../hooks/useToggle";
import ActionsModal from "./ActionsModal";
import ItemScore from "./ItemScore";
import ItemImage from "./ItemImage";
import ItemReview from "./ItemReview";
import ItemData from "./ItemData";

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
}

const RatingItem = ({ item }: Props) => {
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
        <ItemScore item={item} />
        <ItemData item={item} />
        {showReview && (
          <ItemReview toggleShowReview={toggleShowReview} item={item} />
        )}
      </div>
    </Box>
  );
};

RatingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RatingItem;
