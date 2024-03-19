import { Carousel } from "react-responsive-carousel";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fasebook, Linkedin, X } from "../../constants";
import imgB from "../../assets/Group 107.png";
import imgR from "../../assets/Group 106.png";

import Cart from "../cart";
import { toast } from "react-toastify";
const ProductDetailes = () => {
  const naveget = useNavigate();
  const svg = (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
    </svg>
  );

  const [data, setData] = useState([]);
  const [orginalData, setorginalData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:3000/data/${id}`).then((res) => {
        setData(res?.data);
      });
      await axios.get(`http://localhost:3000/data`).then((res) => {
        setorginalData(res?.data);
      });
    };
    fetchData();
  }, []);

  const { price, old_price, title, text, skit, img } = data;
  const imgas = [{}, {}, {}, {}];
  const pirc = price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const addCart = () => {
    let shop = JSON.parse(localStorage.getItem("shop")) || [];
    if (id) {
      const itemIndex = shop.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        let obj = {
          id,
          img,
          text,
          title,
          price,
          old_price,
          skit,
          count: 1,
          subtotal: price,
        };
        const cards = [...shop, obj];
        localStorage.setItem("shop", JSON.stringify(cards));
        toast.success("Added to cart");
      }
    }
  };

  return (
    <>
      <div className="product_w">
        <div className="product_top">
          <div className="container">
            <p>
              <span>Home</span> {svg} <span>Shop</span> {svg}
              <svg
                width="2"
                height="37"
                viewBox="0 0 2 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="1" x2="1" y2="37" stroke="#9F9F9F" strokeWidth="2" />
              </svg>
              Asgaard sofa
            </p>
          </div>
        </div>
        <div className="container">
          <div className="product_d">
            <div className="product_d_left">
              <Carousel>
                {imgas?.map((_, i) => (
                  <img key={i} src={img} alt="" className="carusel_product" />
                ))}
              </Carousel>
            </div>
            <div className="product_d_right">
              <h2>{title}</h2>
              <h3> Rs.{pirc} </h3>
              <div className="riting">
                <span>
                  <svg
                    width="124"
                    height="20"
                    viewBox="0 0 124 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
                      fill="#FFC700"
                    />
                    <path
                      d="M36 1L39 7L45 7.75L40.88 12.37L42 19L36 16L30 19L31.13 12.37L27 7.75L33 7L36 1Z"
                      fill="#FFC700"
                    />
                    <path
                      d="M62 1L65 7L71 7.75L66.88 12.37L68 19L62 16L56 19L57.13 12.37L53 7.75L59 7L62 1Z"
                      fill="#FFC700"
                    />
                    <path
                      d="M88 1L91 7L97 7.75L92.88 12.37L94 19L88 16L82 19L83.13 12.37L79 7.75L85 7L88 1Z"
                      fill="#FFC700"
                    />
                    <path
                      d="M111.156 7.0125L104.8 7.9375L109.4 12.4188L108.313 18.75L114 15.7625V1.25L111.156 7.0125Z"
                      fill="#FFC700"
                    />
                  </svg>
                </span>
                |<p>5 Customer Review</p>
              </div>
              <p className="text">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p className="size">Size</p>
              <button className="colorbtn" id="c">
                L
              </button>
              <button className="colorbtn">XL</button>
              <button className="colorbtn">Xs</button>
              <p className="size">Color</p>
              <div className="color">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
              </div>
              <div className="addto">
                <button className="add" onClick={addCart}>
                  Add To Cart
                </button>
                <button className="add">+ Compare</button>
              </div>
              <hr />
              <div className="diskrip">
                <p>
                  SKU
                  <p>
                    : <span>SS001</span>
                  </p>
                </p>
                <p>
                  Category
                  <p>
                    : <span>Sofas</span>
                  </p>
                </p>
                <p>
                  Tags
                  <p>
                    : <span>Sofa,</span> <span>Chair,</span>
                  </p>
                  <span> Home,</span>
                  <span> Shop</span>
                </p>
                <p>
                  Share
                  <p>
                    : <Fasebook /> <Linkedin /> <X />
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="product_dic">
            <div className="text">
              <p>Description</p>
              <p>Additional Information</p>
              <p>Reviews [5]</p>
            </div>
            <div className="dic_text">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
            </div>
            <div className="dic_text">
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="dic_img">
              <img src={imgB} alt="" />
              <img src={imgR} alt="" />
            </div>
          </div>
          <section className="products">
            <div className="container">
              <h2>Related Products</h2>
              <div className="products_w">
                {orginalData?.slice(0, 4)?.map((el, i) => (
                  <Cart key={i} {...el} />
                ))}
              </div>
              <button className="product_btn" onClick={() => naveget("/shop")}>
                Show More
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetailes;
