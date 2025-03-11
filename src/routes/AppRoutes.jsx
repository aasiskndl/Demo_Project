import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/home/Hero";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import FAQ from "../components/FAQ";
import Career from "../components/Career";
import MtechBilling from "../components/projects/MtechBilling";
import JJewellery from "../components/projects/JJewellery";
import MatecRestaurant from "../components/projects/MatecRestaurant";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/career" element={<Career />} />
      <Route path="/products/mtechbilling" element={<MtechBilling />} />
      <Route path="/products/jjewellery" element={<JJewellery />} />
      <Route path="/products/matecrestaurant" element={<MatecRestaurant />} />
    </Routes>
  );
};

export default AppRoutes;
