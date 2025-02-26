import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = "https://gift-nation.onrender.com";
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const url = "http://localhost:8000/auth/login/success";
      const response = await axios.get(url, { withCredentials: true });
      setUser(response.data.user);
      localStorage.setItem("token", response.data.user.token);
      setToken(response.data.user.token); 
      navigate("/");
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list-product`);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = async (itemId, quantity) => {
    const updatedCart = { ...cartItems, [itemId]: (cartItems[itemId] || 0) + quantity };
    setCartItems(updatedCart);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/add-to-cart`, { itemId, quantity }, { headers: { token } });
      } catch (error) {
        console.error("Error adding to cart:", error.message);
      }
    }
  };

  const updateCart = async (itemId, quantity) => {
    if (quantity < 1) return deleteCartItem(itemId); // If quantity is 0, remove the item

    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/update-cart`,
        { itemId, quantity },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: quantity,
        }));
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const deleteCartItem = async (itemId) => {
    try {
      await axios.post(`${backendUrl}/api/cart/delete-cart`, { itemId }, { headers: { token } });

      setCartItems((prev) => {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      });
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const getUserCart = async () => {
    if (!token) return;

    try {
      const response = await axios.post(`${backendUrl}/api/cart/get-cart`, {}, { headers: { token } });
      setCartItems(response.data.cartData || {});
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const getCartCount = () => Object.keys(cartItems).length;

  useEffect(() => {
    if (token) getUserCart();
  }, [token]);

  useEffect(() => {
    getData();
  }, []);

  const value = { products, cartItems, addToCart, deleteCartItem, getCartCount, updateCart, getUserCart };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
