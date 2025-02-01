import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = "https://gift-nation.onrender.com";
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


	const getUser = async () => {
		try {
			const url = `http://localhost:8000/auth/login/success`;
			const response = await axios.get(url, { withCredentials: true });
      setUser(response.data.user)
      localStorage.setItem('token',response.data.user.token)
      navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

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
