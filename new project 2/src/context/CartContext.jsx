// src/context/CartContext.jsx
// Provides cart state (items, add, remove, update qty) to the whole app

import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add a product — if already in cart, bump quantity
  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  // Remove a product entirely
  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((i) => i.id !== productId));
  }

  // Change quantity; remove if qty drops to 0
  function updateQty(productId, qty) {
    if (qty <= 0) { removeFromCart(productId); return; }
    setCartItems((prev) =>
      prev.map((i) => (i.id === productId ? { ...i, qty } : i))
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}