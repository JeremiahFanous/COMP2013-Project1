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
  quantity,
  itemQuantity,
  handleQuantityChange,
  handleOutOfStock,
}: ItemCardFunctions) {
  const outOfStock = handleOutOfStock(quantity);
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
      <p>{outOfStock ? "Out of Stock" : quantity}</p>\{" "}
      <button
        onClick={() => handleQuantityChange(id, 1)}
        disabled={outOfStock || itemQuantity >= quantity}
      >
        +
      </button>
      <span>{itemQuantity}</span>
      <button
        onClick={() => handleQuantityChange(id, -1)}
        disabled={itemQuantity === 0}
      >
        -
      </button>
    </div>
  );
}
