import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AppRoutes;
