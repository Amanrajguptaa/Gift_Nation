import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, products } = useContext(ShopContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (!cartItems || !products) return; // Ensure both exist

    const updatedCartProducts = Object.entries(cartItems)
      .map(([id, quantity]) => {
        const product = products.find((prod) => prod._id === id);
        return product ? { ...product, quantity } : null;
      })
      .filter(Boolean); // Remove null values

    setCartProducts(updatedCartProducts);
  }, [cartItems, products]);

  const handlePlusQty = (id) => {
    setCartProducts((prev) =>
      prev.map((product) =>
        product._id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleMinusQty = (id) => {
    setCartProducts((prev) =>
      prev.map((product) =>
        product._id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  const calculateTotalAmount = () => {
    return cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  return Object.keys(cartItems).length === 0 ? (
    <div className="empty-cart-section w-full py-10 flex flex-col items-center justify-center gap-4">
        <img src={'/assets/EmptyCart.png'} className="w-[25%] -mb-10 -mt-10 animate-customBounce" />
        <div className="heading_ctr text-4xl sm:text-5xl font-semibold leading-tight">
          Your Cart is Empty
        </div>
        <div className="message_ctr text-lg font-medium text-gray-600 w-[40%] text-center leading-5">
          Start adding some items to your cart and make your loved ones happy!
        </div>
        <div className="flex gap-4 mt-4">
          <div className="explore_btn flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
            Explore Collections
            <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
          </div>
          <div className="explore_btn flex items-center justify-center bg-[#d2d2d2] rounded-full px-8 py-4 text-sm cursor-pointer hover:bg-red-600 hover:text-white duration-200 ease-in-out">
            Visit WishList
            <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
          </div>
        </div>
      </div>
  ) : (
    <div className="w-full border-2 px-6 md:px-20 flex flex-col-reverse md:flex-row items-start justify-center gap-4 py-4">
      <div className="right_ctr flex flex-col gap-3 pb-4 md:w-8/12 w-full">
        {cartProducts.map((item) => (
          <div key={item._id} className="bg-[#e0e0e0] w-full h-[175px] sm:h-[250px] md:h-[175px] p-4 rounded-lg flex items-center justify-center gap-4 relative">
            <div className="bi bi-trash-fill absolute right-6 top-4 sm:text-2xl md:text-base cursor-pointer"></div>
            <img src={item.images[0]} alt={item.name} className="bg-white rounded-lg h-full md:w-4/12 w-5/12 sm:w-4/12" />
            <div className="text_ctr md:w-8/12 w-7/12 sm:w-8/12 flex h-full">
              <div className="right_ctr w-8/12 flex flex-col gap-2 sm:gap-10 md:gap-2 justify-center">
                <div className="flex flex-col">
                  <div className="text-xs sm:text-xl md:text-sm font-medium">{item.category}</div>
                  <div className="sm:text-3xl text-xl font-semibold leading-5">{item.name}</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl sm:text-4xl md:text-3xl font-medium">₹{item.price * item.quantity}</div>
                  <div className="units_ctr flex bg-white items-center justify-center w-full sm:w-6/12 md:w-5/12 rounded-md border border-black">
                    <div className="bi bi-dash-circle w-full flex items-center justify-center h-full cursor-pointer" onClick={() => handleMinusQty(item._id)}></div>
                    <div className="w-full flex items-center justify-center border-x border-black">{item.quantity}</div>
                    <div className="bi bi-plus-circle w-full flex items-center justify-center h-full cursor-pointer" onClick={() => handlePlusQty(item._id)}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="left_ctr md:w-4/12 w-full bg-[#e0e0e0] border-2 h-auto rounded-lg flex flex-col items-center py-4 px-10 gap-2 md:sticky md:top-2">
        <div className="text-2xl font-semibold">Order Summary</div>
        <div className="w-full flex flex-col justify-start">
          {cartProducts.map((item) => (
            <div key={item._id} className="flex justify-between w-full bg-black/5 mb-2 p-1 text-md">
              <div>{item.name} x {item.quantity}</div>
              <div className="font-semibold">₹{item.price * item.quantity}</div>
            </div>
          ))}
        </div>
        <div className="border-y border-black h-auto py-4 w-full flex justify-between items-center mb-2">
          <div className="font-semibold text-base w-5/12 leading-tight">Total Amount Payable</div>
          <div className="font-semibold text-3xl">₹{calculateTotalAmount()}</div>
        </div>

        <button className="w-full bg-[#111827] rounded-full p-3 text-white text-md">
          <Link to={"/checkout"}> Proceed to Checkout</Link>
        </button>

        <div className="w-full flex items-center justify-center gap-2 text-md">
          <button className="bg-[#111827] rounded-full px-7 py-3 w-8/12 text-white">Add More</button>
          <button className="bg-[#111827] rounded-full px-6 py-3 w-4/12 text-white text-md flex items-center justify-center">
            <span className="bi bi-file-earmark-arrow-down-fill"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
