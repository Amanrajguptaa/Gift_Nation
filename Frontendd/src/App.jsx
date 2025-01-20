import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from './components/Header.jsx';
import Cart from "./pages/Cart.jsx";
import Product from './pages/Product.jsx'
import SubCategory from "./pages/SubCategory.jsx";
import Footer from './components/Footer.jsx'
import Wishlist from "./pages/Wishlist.jsx";
const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/product/:ProductId" element={<Product/>} />
        <Route path="/sub-category" element={<SubCategory/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
