import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cart from "./pages/Cart";
import Product from './pages/Product'
import SubCategory from "./pages/SubCategory";

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
