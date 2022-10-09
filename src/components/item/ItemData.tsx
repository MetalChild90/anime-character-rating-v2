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

function ItemData({ item }: Props) {
  return (
    <div>
      <p className="Item-name">{item.name}</p>
      <p>{item.anime}</p>
    </div>
  );
}

export default ItemData;
