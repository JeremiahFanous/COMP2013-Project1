import { type ClothingProduct } from "../data/data";

export default function CheckoutCard({
  image,
  name,
  price,
  itemQuantity,
}: ClothingProduct) {
  return (
    <div className="CheckoutCard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {itemQuantity}</p>
      <p>Subtotal: ${(price * itemQuantity).toFixed(2)}</p>
    </div>
  );
}
