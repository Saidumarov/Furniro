import { NavLink } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_w">
            <div className="footer_one">
              <h2>Funiro.</h2>
              <p>
                400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA
              </p>
            </div>
            <div className="footer_two">
              <p>Links</p>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </div>
            <div className="footer_three">
              <p className="h">Help</p>
              <p>Payment Options</p>
              <p>Returns</p>
              <p>Privacy Policies</p>
            </div>
            <div className="footer_four">
              <p>Newsletter</p>
              <div className="from">
                <input type="email" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="footer_fief">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
