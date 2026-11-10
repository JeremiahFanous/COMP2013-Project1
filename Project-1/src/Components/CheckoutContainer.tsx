import CheckoutCard from "./CheckoutCard";
import { type ClothingProduct } from "../data/data";

interface CheckoutContainerProps {
  cartItems: ClothingProduct[];
}

export default function CheckoutContainer({
  cartItems,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      {cartItems.map((cartItem) => (
        <CheckoutCard key={cartItem.id} {...cartItem} />
      ))}
    </div>
  );
}
