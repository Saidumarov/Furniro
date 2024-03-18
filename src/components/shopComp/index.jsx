import "./index.scss";
import img from "../../assets/Group 57.png";
import img1 from "../../assets/ci_grid-big-round.png";
import img2 from "../../assets/bi_view-list.png";
import Cart from "../cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Footercomp from "../footercomp";
const ShopComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3000/data").then((res) => {
        setData(res?.data);
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="shopComp">
        <div className="container">
          <h2>Shop</h2>
          <p className="text">
            Home
            <span>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
              </svg>
            </span>
            Shop
          </p>
        </div>
      </section>
      <div className="filter_shop">
        <div className="container">
          <div className="filter_left">
            <img src={img} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <p className="p"></p>
            <p className="text">Showing 1–16 of 32 results</p>
          </div>
          <div className="filter_right">
            <p className="show">Show</p>
            <input
              type="tel"
              placeholder="16"
              className="in"
              maxLength="2"
              required
            />
            <p className="sort">Short by</p>
            <input
              type="tel"
              maxLength="10"
              placeholder="Default"
              className="in1"
            />
          </div>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="products_w">
            {data?.map((el, i) => (
              <Cart key={i} {...el} />
            ))}
          </div>
        </div>
      </div>
      <Footercomp />
    </>
  );
};

export default ShopComp;
