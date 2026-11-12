import { type ClothingProduct } from "../data/data";

export default function CheckoutCard({
  image,
  name,
  price,
  quantity,
}: ClothingProduct) {
  return (
    <div className="CheckoutCard">
      <img src={image} alt={name} />
      <p>${price}</p>
      <p>{quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
    </div>
  );
}
