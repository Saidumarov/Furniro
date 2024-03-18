import React from "react";
import ShopComp from "../../components/shopComp";

const Shop = ({ searchValue, handelSearch }) => {
  return (
    <>
      <ShopComp searchValue={searchValue} handelSearch={handelSearch} />
    </>
  );
};

export default Shop;
