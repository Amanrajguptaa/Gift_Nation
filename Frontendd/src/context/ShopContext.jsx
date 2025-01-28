import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = "https://gift-nation.onrender.com";
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/product/list-product`
      );
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCart = (itemId, quantity) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      updatedCart[itemId] += quantity;
    } else {
      updatedCart[itemId] = quantity;
    }
    setCartItems(updatedCart);
  };

  const getCartCount = () => Object.keys(cartItems).length;

  const value = { products, cartItems, addToCart, getCartCount };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
