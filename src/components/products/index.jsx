import axios from "axios";
import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../cart";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const naveget = useNavigate();
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
      <section className="products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="products_w">
            {data?.slice(0, 8)?.map((el, i) => (
              <Cart key={i} {...el} />
            ))}
          </div>
          <button className="product_btn" onClick={() => naveget("/shop")}>
            Show More
          </button>
        </div>
      </section>
    </>
  );
};

export default Products;
