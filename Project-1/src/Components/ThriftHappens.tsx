import { useState } from "react";
import NavBar from "./NavBar";
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

  //1.
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

  //2.
  function handleOutOfStock(quantity: number) {
    return quantity === 0;
  }

  //3.
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

  //5.
  function handleRemoveFromCart(id: number) {
    const itemToRemove = cartItems.find((cartItem) => cartItem.id === id);
    if (!itemToRemove) return;
    const restoreAmount = itemToRemove.itemQuantity;

    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id),
    );

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + restoreAmount }
          : item,
      ),
    );
  }

  //6.
  function handleEmptyCheckout() {
    setItems((prevItems) =>
      prevItems.map((item) => {
        const itemInCart = cartItems.find(
          (cartItem) => cartItem.id === item.id,
        );
        return itemInCart
          ? { ...item, quantity: item.quantity + itemInCart.itemQuantity }
          : item;
      }),
    );
    setCartItems([]);
  }

  //Main Return
  return (
    <div>
      <NavBar />
      <CheckoutContainer
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCheckout={handleEmptyCheckout}
      />
      <ItemsContainer
        products={items}
        handleQuantityChange={handleQuantityChange}
        handleOutOfStock={handleOutOfStock}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
