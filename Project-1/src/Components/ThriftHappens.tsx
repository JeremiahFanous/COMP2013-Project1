import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import { products, type ClothingProduct } from "../data/data";

export interface ItemCardFunctions extends ClothingProduct {
  handleQuantityChange: (id: number, delta: number) => void;
  handleOutOfStock: (quantity: number) => boolean;
  handleAddToCart: (id: number) => void;
}

export default function ThriftHappens() {
  //States
  const [items, setItems] = useState<ClothingProduct[]>(products);
  const [cartItems, setCartItems] = useState<ClothingProduct[]>([]);

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

  function handleOutOfStock(quantity: number) {
    return quantity === 0;
  }

  function handleAddToCart(id: number) {
    const targetItem = items.find((item) => item.id === id);

    if (!targetItem || targetItem.itemQuantity === 0) {
      return;
    }

    const amountToAdd = targetItem.itemQuantity;

    setCartItems((prevCart) => {
      const existingCartItem = prevCart.find((cartItem) => cartItem.id === id);
      if (existingCartItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, itemQuantity: cartItem.itemQuantity + amountToAdd }
            : cartItem,
        );
      }
      return [...prevCart, { ...targetItem, itemQuantity: amountToAdd }];
    });

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - amountToAdd, itemQuantity: 0 }
          : item,
      ),
    );
  }

  //Main Return
  return (
    <div className="StoreLayout">
      <ItemsContainer
        products={items}
        handleQuantityChange={handleQuantityChange}
        handleOutOfStock={handleOutOfStock}
        handleAddToCart={handleAddToCart}
      />
      <CheckoutContainer cartItems={cartItems} />
    </div>
  );
}
