import useCacheFetch from "@/hooks/useCacheFetch";
import { createContext, useContext, useState } from "react";

const CartCtx = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const {
    data: products,
    loading,
    error,
  } = useCacheFetch(
    "products_cache",
    "https://itx-frontend-test.onrender.com/api/product"
  );

  const addCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartCtx.Provider
      value={{ products, search, setSearch, loading, error, cart }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};
