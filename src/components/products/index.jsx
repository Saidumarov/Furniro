import axios from "axios";
import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../cart";
const Products = () => {
  const [data, setData] = useState();
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
            {data?.map((el, i) => (
              <Cart key={i} {...el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
