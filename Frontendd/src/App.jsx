import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import SubCategory from "./pages/SubCategory.jsx";
import Footer from "./components/Footer.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Landing from "./pages/Landing.jsx";
import Category from "./pages/Category.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/:category/sub-category" element={<SubCategory />} />
        <Route path="/checkout" element={token ? <Checkout /> : <SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
