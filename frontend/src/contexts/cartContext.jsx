import useCacheFetch from "@/hooks/useCacheFetch";
import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const CartCtx = createContext();

export const CartProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem("cartCount")) || 0
  );
  const {
    data: products,
    loading,
    error,
  } = useCacheFetch(
    "products_cache",
    "https://itx-frontend-test.onrender.com/api/product"
  );

  const addCart = async (product) => {
    try {
      const resp = await axios.post(
        "https://itx-frontend-test.onrender.com/api/cart",
        product
      );
      const newCartCount = resp.data.count;
      setCartCount((prevCartCount) => prevCartCount + newCartCount);
      localStorage.setItem("cartCount", cartCount);
    } catch (error) {
      console.error("Error al añadir al carrito:", error);
    }
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      setCartCount(parseInt(storedCount));
    }
  }, []);

  return (
    <CartCtx.Provider
      value={{
        products,
        search,
        setSearch,
        loading,
        error,
        cartCount,
        addCart,
      }}
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
