import ItemCard from "./ItemCard";
import type { ClothingProduct } from "../data/data";

interface ItemsContainerProps {
  products: ClothingProduct[];
  handleQuantityChange: (id: number, delta: number) => void;
}
export default function ItemsContainerProps({
  products,
  handleQuantityChange,
}: ItemsContainerProps) {
  return (
    <div className="ItemsContainer">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          {...product}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
}
