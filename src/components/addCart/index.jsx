import "./index.scss";
import logo from "../../assets/logo.png";
import img from "../../assets/image 1.png";
import { Delete } from "../../constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footercomp from "../footercomp";
const AddCart = () => {
  const [data, setData] = useState([]);
  const [subtotal, setSubtotal] = useState();
  const [active, setActive] = useState(0);
  let shop = JSON.parse(localStorage.getItem("shop")) || [];
  useEffect(() => {
    setData(shop);
    const totalSubtotal = shop.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
    setSubtotal(totalSubtotal);
  }, [active]);

  const deleteProduct = (id) => {
    shop = shop.filter((item) => item.id !== id);
    localStorage.setItem("shop", JSON.stringify(shop));
    setData(shop);
    toast.error("Product Deleted Successfully");
    setActive(active + 1);
  };

  const increment = (id) => {
    shop = shop.map((item) => {
      if (item.id === id) {
        item.count++;
        item.subtotal = item.price * item.count;
      }
      return item;
    });
    localStorage.setItem("shop", JSON.stringify(shop));
    setData(shop);
    setActive(active + 1);
  };
  const decrement = (id) => {
    shop = shop.map((item) => {
      if (item.id === id) {
        item.count--;
        item.subtotal = item.subtotal - item.price;
      }
      return item;
    });
    localStorage.setItem("shop", JSON.stringify(shop));
    setData(shop);
    setActive(active + 1);
  };

  return (
    <>
      <section className="add_cart">
        <div className="add_text">
          <img src={logo} alt="" />
          <h2>Cart</h2>
          <p>
            Home{" "}
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
              </svg>
            </span>
            Cart
          </p>
        </div>
      </section>
      <div className="add_cart_w">
        <div className="container">
          <div className="add_left">
            <div className="add_top">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>
                <p>Subtotal</p>
              </p>
            </div>
            {data?.map((el, i) => (
              <div key={i} className="add_cartW">
                <img src={el?.img} alt="" />
                <p> {el?.title} </p>
                <p>
                  Rs.
                  {el?.price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <div className="count">
                  <button
                    onClick={() => decrement(el?.id)}
                    disabled={el?.count === 1}
                  >
                    -
                  </button>
                  <p>{el?.count}</p>
                  <button onClick={() => increment(el?.id)}>+</button>
                </div>
                <p className="color">
                  Rs.{" "}
                  {el?.subtotal
                    .toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <button onClick={() => deleteProduct(el?.id)}>
                  <Delete />
                </button>
              </div>
            ))}
          </div>
          <div className="add_right">
            <h2>Cart Totals</h2>
            <div className="add_item">
              <p>
                Subtotal{" "}
                <span style={{ opacity: "0.6" }}>
                  Rs.{" "}
                  {subtotal?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>{" "}
              </p>
              <p>
                Total{" "}
                <span className="color">
                  Rs.{" "}
                  {subtotal?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
              </p>
              <button>Check Out</button>
            </div>
          </div>
        </div>
      </div>
      <Footercomp />
    </>
  );
};

export default AddCart;
