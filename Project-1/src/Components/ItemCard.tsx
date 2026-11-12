import type { ItemCardFunctions } from "./ThriftHappens";
export default function ItemCard({
  id,
  image,
  name,
  fit,
  category,
  color,
  description,
  size,
  price,
  handleQuantityChange,
}: ItemCardFunctions) {
  return (
    <div className="ItemCard">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{fit}</p>
      <p>{category}</p>
      <p>{color}</p>
      <p>{size}</p>
      <p>${price}</p>
      <button onClick={() => handleQuantityChange(id, 1)}>+</button>
      <button onClick={() => handleQuantityChange(id, -1)}>-</button>
    </div>
  );
}
