import defaultImage from "../../assets/images/defaultimage.png";
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

interface ItemImageProps {
  item: Rating;
}

function ItemImage({ item }: ItemImageProps) {
  return (
    <div className="Item-image-box">
      <img
        src={item.image!.file ? item.image!.file : defaultImage}
        alt={item.name ? item.name : "Default Image"}
        className="Item-image"
        style={{ width: item.image!.file ? "auto" : "200px" }}
      />
    </div>
  );
}

export default ItemImage;
