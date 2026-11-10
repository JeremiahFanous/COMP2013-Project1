import { type ClothingProduct } from "../data/data";
export default function ItemCard({
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
}: ClothingProduct) {
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
      <button></button>
    </div>
  );
}
