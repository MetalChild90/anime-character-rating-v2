import { RatingInterface } from "../../Interfaces";

interface ItemDataProps {
  item: RatingInterface;
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
