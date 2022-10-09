import { useContext } from "react";
import { RatingContext } from "../../context/RatingContext";

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
  toggleOpenModal: () => void;
  toggleShowReview: () => void;
}

function ActionsModal({ toggleOpenModal, toggleShowReview, item }: Props) {
  const { deleteRating, editRating } = useContext(RatingContext);

  const handleEditClick = () => {
    toggleOpenModal();
    editRating(item);
  };

  const handleDeleteClick = () => {
    toggleOpenModal();
    deleteRating(item.id);
  };

  const handleShowReviewClick = () => {
    toggleOpenModal();
    toggleShowReview();
  };

  return (
    <div className="Item-actionButtons-wrapper" onClick={toggleOpenModal}>
      <div className="Item-actionButtons">
        <button
          className="Button Button-fullWidth"
          onClick={handleShowReviewClick}
        >
          Show review
        </button>
        <button className="Button Button-fullWidth" onClick={handleEditClick}>
          Edit
        </button>
        <button
          className="Button Button-delete Button-fullWidth"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ActionsModal;
