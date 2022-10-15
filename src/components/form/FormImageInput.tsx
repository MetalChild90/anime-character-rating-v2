import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

interface ImageObject {
  file: string | ArrayBuffer | null;
  name: string;
}

interface Rating {
  id?: string;
  name: string;
  anime: string;
  review: string;
  score?: number;
  image: ImageObject | null;
}

interface FormImageInputProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rating: Rating;
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
      />
      {rating?.image?.name && (
        <p className="Form-image-name">{rating?.image?.name}</p>
      )}
    </div>
  );
}

export default FormImageInput;
