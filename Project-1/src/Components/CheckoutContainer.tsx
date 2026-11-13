import CheckoutCard from "./CheckoutCard";
import { type ClothingProduct } from "../data/data";

interface CheckoutContainerProps {
  cartItems: ClothingProduct[];
  handleRemoveFromCart: (id: number) => void;
  handleEmptyCheckout: () => void;
}

export default function CheckoutContainer({
  cartItems,
  handleRemoveFromCart,
  handleEmptyCheckout,
}: CheckoutContainerProps) {
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0,
  );
  return (
    <div className="CheckoutContainer">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          {cartItems.map((cartItem) => (
            <CheckoutCard
              key={cartItem.id}
              {...cartItem}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
          <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
          <button onClick={handleEmptyCheckout}>Empty Checkout</button>
        </>
      )}
    </div>
  );
}
