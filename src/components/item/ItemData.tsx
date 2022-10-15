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

interface ItemDataProps {
  item: Rating;
}

function ItemData({ item }: ItemDataProps) {
  return (
    <div>
      <p className="Item-name">{item.name}</p>
      <p>{item.anime}</p>
    </div>
  );
}

export default ItemData;
