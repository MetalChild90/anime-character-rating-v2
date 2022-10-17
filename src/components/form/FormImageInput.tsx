import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { RatingInterface } from "../../Interfaces";

interface FormImageInputProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rating: RatingInterface;
  setFileInputRef: (ref: HTMLInputElement | null) => void;
}

function FormImageInput({
  rating,
  handleImageChange,
  setFileInputRef,
}: FormImageInputProps) {
  return (
    <div>
      <label htmlFor="fileControl" className="Form-file-input">
        <BsFillFileEarmarkArrowUpFill /> Pick Image
      </label>
      <input
        type="file"
        onChange={handleImageChange}
        ref={(ref) => {
          setFileInputRef(ref);
        }}
        multiple={false}
        id="fileControl"
        accept=".jpg,.png,.jpeg"
      />
      {rating?.image?.name && (
        <p className="Form-image-name">{rating?.image?.name}</p>
      )}
    </div>
  );
}

export default FormImageInput;
