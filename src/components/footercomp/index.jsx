import "./index.scss";
import img from "../../assets/trophy 1.png";
import img1 from "../../assets/guarantee.png";
import img3 from "../../assets/shipping.png";
import img4 from "../../assets/customer-support.png";
const Footercomp = () => {
  return (
    <>
      <section className="footercomp">
        <div className="container">
          <div className="fot_cart">
            <img src={img} alt="" />
            <div>
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="fot_cart">
            <img src={img1} alt="" />
            <div>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="fot_cart">
            <img src={img3} alt="" />
            <div>
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className="fot_cart">
            <img src={img4} alt="" />
            <div>
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footercomp;
