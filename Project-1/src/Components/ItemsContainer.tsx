import ItemCard from "./ItemCard";
import { type ClothingProduct } from "../data/data";

interface ItemContainerProps {
  products: ClothingProduct[];
}

export default function ItemContainer({ products }: ItemContainerProps) {
  return (
    <div className="ItemContainer">
      {products.map((product) => (
        <ItemCard key={product.id} {...product} />
      ))}
    </div>
  );
}
