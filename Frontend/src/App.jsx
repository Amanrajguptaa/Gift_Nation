import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Wishlist from "./pages/WishList.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Cart from "./pages/Cart.jsx";
import Product from './pages/Product.jsx'
import SubCategory from "./pages/SubCategory.jsx";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:ProductId" element={<Product/>} />
        <Route path="/sub-category" element={<SubCategory/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
