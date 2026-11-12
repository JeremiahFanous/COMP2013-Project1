import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import { products, type ClothingProduct } from "../data/data";

export interface ItemCardFunctions extends ClothingProduct {
  handleQuantityChange: (id: number, delta: number) => void;
}

export default function ThriftHappens() {
  const [items, setItems] = useState<ClothingProduct[]>(products);

  function handleQuantityChange(id: number, delta: number) {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item,
      );
    });
  }
  const cartItems = items.filter((item) => item.quantity > 0);

  return (
    <div>
      <ItemsContainer
        products={items}
        handleQuantityChange={handleQuantityChange}
      />
      <CheckoutContainer cartItems={cartItems} />
    </div>
  );
}
