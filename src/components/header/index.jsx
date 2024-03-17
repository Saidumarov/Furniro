import "./index.scss";
import header from "../../assets/Frame 168.png";
import user from "../../assets/mdi_account-alert-outline.png";
import search from "../../assets/akar-icons_search.png";
import like from "../../assets/akar-icons_heart.png";
import shop from "../../assets/ant-design_shopping-cart-outlined.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Headroom from "react-headroom";
const Header = () => {
  const [active, setactive] = useState(false);
  return (
    <>
      <Headroom>
        <header>
          <div className="container">
            <div className="header">
              <div className="header_one">
                <img src={header} alt="" />
              </div>
              <div className={`heeader_two ${active ? "active" : ""}`}>
                <div className="x" onClick={() => setactive(!active)}>
                  <GrClose />
                </div>
                <NavLink to={"/"} onClick={() => setactive(!active)}>
                  Home
                </NavLink>
                <NavLink to={"shop"} onClick={() => setactive(!active)}>
                  Shop
                </NavLink>
                <NavLink to={"about"} onClick={() => setactive(!active)}>
                  About
                </NavLink>
                <NavLink to={"contact"} onClick={() => setactive(!active)}>
                  Contact
                </NavLink>
              </div>
              <div className="header_three">
                <img src={user} alt="" className="user" />
                <img src={search} alt="" />
                <img src={like} alt="" className="like" />
                <span className="cart">
                  <span className="count">1</span>
                  <img src={shop} alt="" />
                </span>
                <div className="menu" onClick={() => setactive(!active)}>
                  <AiOutlineMenu />
                </div>
              </div>
            </div>
          </div>
        </header>
      </Headroom>
    </>
  );
};

export default Header;
