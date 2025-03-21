import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/home/Hero";
import AboutUs from "../components/aboutus/AboutUs";
import FAQ from "../components/FAQ";
import Career from "../components/Career";
import MtechBilling from "../components/projects/mtech-billing/MtechBilling";
import JJewellery from "../components/projects/jjewellery/JJewellery";
import MatecRestaurant from "../components/projects/matec-restaurant/MatecRestaurant";
import Services from "../components/services/Services";
import ScrollToTop from './ScrollToTop';
import ContactPage from "../components/contact/ContactPage";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/career" element={<Career />} />
      <Route path="/products/mtechbilling" element={<MtechBilling />} />
      <Route path="/products/jjewellery" element={<JJewellery />} />
      <Route path="/products/matecrestaurant" element={<MatecRestaurant />} />
      < Route path="/services" element={<Services />} />
      < Route path="/contact" element={<ContactPage />} />
    </Routes>
    </>
  );
};

export default AppRoutes;
