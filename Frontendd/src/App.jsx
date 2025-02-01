import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import SubCategory from "./pages/SubCategory.jsx";
import Footer from "./components/Footer.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Category from "./pages/Category.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import AllCategoriesPage from './pages/AllCategoriesPage.jsx';

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {token ? (
          <>
            <Route path="/categories" element={<AllCategoriesPage />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product/:ProductId" element={<Product />} />
            <Route path="/:category/sub-category" element={<SubCategory />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/categories" element={<Navigate to="/signup" />} />
            <Route path="/category/:categoryName" element={<Navigate to="/signup" />}/>
            <Route path="/cart" element={<Navigate to="/signup" />} />
            <Route path="/wishlist" element={<Navigate to="/signup" />} />
            <Route path="/product/:ProductId" element={<Navigate to="/signup" />} />
            <Route path="/:category/sub-category" element={<Navigate to="/signup" />} />
            <Route path="/checkout" element={<Navigate to="/signup" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
