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
      <p>${price}</p>
      <p>{itemQuantity}</p>
      <p>Subtotal: ${price * itemQuantity}</p>
    </div>
  );
}
