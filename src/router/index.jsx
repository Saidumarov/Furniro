import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import { Footer, Header } from "../components";
import { useState } from "react";

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
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
