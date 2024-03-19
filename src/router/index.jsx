import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import { Footer, Header } from "../components";
import { useState } from "react";
import Detailes from "../pages/Detailes";
import CartPage from "../pages/Cart";

const Router = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <Header handelSearch={handleSearchChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={
            <Shop searchValue={searchValue} handelSearch={handleSearchChange} />
          }
        />
        <Route path="/product/:id" element={<Detailes />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
