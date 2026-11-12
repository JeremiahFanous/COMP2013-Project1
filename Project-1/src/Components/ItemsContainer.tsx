import ItemCard from "./ItemCard";
import type { ClothingProduct } from "../data/data";

interface ItemsContainerProps {
  products: ClothingProduct[];
  handleQuantityChange: (id: number, delta: number) => void;
  handleOutOfStock: (quantity: number) => boolean;
}
export default function ItemsContainer({
  products,
  handleQuantityChange,
  handleOutOfStock,
}: ItemsContainerProps) {
  return (
    <div className="ItemsContainer">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          {...product}
          handleQuantityChange={handleQuantityChange}
          handleOutOfStock={handleOutOfStock}
        />
      ))}
    </div>
  );
}
