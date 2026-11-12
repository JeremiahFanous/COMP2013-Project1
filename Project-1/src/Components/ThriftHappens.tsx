import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import { products, type ClothingProduct } from "../data/data";

export interface ItemCardFunctions extends ClothingProduct {
  handleQuantityChange: (id: number, delta: number) => void;
  handleOutOfStock: (quantity: number) => boolean;
}

export default function ThriftHappens() {
  const [items, setItems] = useState<ClothingProduct[]>(products);

  //Handlers
  function handleQuantityChange(id: number, delta: number) {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              itemQuantity: Math.min(
                item.quantity,
                Math.max(0, item.itemQuantity + delta),
              ),
            }
          : item,
      );
    });
  }
  const cartItems = items.filter((item) => item.itemQuantity > 0);

  function handleOutOfStock(quantity: number) {
    return quantity === 0;
  }

  //Main Return
  return (
    <div>
      <ItemsContainer
        products={items}
        handleQuantityChange={handleQuantityChange}
        handleOutOfStock={handleOutOfStock}
      />
      <CheckoutContainer cartItems={cartItems} />
    </div>
  );
}
