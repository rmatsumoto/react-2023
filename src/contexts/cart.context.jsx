import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  isCartOpen: false,
  setProducts: () => null,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = { products, isCartOpen, setProducts, setIsCartOpen };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}