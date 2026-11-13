import { type ClothingProduct } from "../data/data";

interface CheckoutCardProps extends ClothingProduct {
  handleRemoveFromCart: (id: number) => void;
}

export default function CheckoutCard({
  id,
  image,
  name,
  price,
  itemQuantity,
  handleRemoveFromCart,
}: CheckoutCardProps) {
  return (
    <div className="CheckoutCard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {itemQuantity}</p>
      <p>Subtotal: ${(price * itemQuantity).toFixed(2)}</p>
      <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
    </div>
  );
}
