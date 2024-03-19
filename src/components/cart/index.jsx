import "./index.scss";
import share from "../../assets/Frame 11.png";
import comp from "../../assets/Frame 12.png";
import likePng from "../../assets/Like.png";
import Like, { LikeL } from "../../constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({ id, price, old_price, title, text, skit, img }) => {
  const [liked, setLiked] = useState(false);
  const naviget = useNavigate();
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLiked(storedLikes[id] || false);
  }, [id]);

  const handleLike = (e) => {
    e.stopPropagation();

    const updatedLikes = { ...JSON.parse(localStorage.getItem("likes")) };
    updatedLikes[id] = true;
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    setLiked(true);
  };

  const handleUnlike = (e) => {
    e.stopPropagation();

    const updatedLikes = { ...JSON.parse(localStorage.getItem("likes")) };
    updatedLikes[id] = false;
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    setLiked(false);
  };

  const addCart = (CartId, img, text, title, price, old_price, skit) => {
    let shop = JSON.parse(localStorage.getItem("shop")) || [];
    if (CartId) {
      const itemIndex = shop.findIndex((item) => item.id === CartId);
      if (itemIndex === -1) {
        let obj = {
          id: CartId,
          img: img,
          text: text,
          title: title,
          price: price,
          old_price: old_price,
          skit: skit,
          count: 1,
          subtotal: price,
        };
        const cards = [...shop, obj];
        localStorage.setItem("shop", JSON.stringify(cards));
        toast.success("Product saved successfully");
      }
    }
  };

  const pirc = price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const old = old_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const clik = (id) => {
    naviget(`/product/${id}`);
  };

  const babling = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="cart_w" onClick={() => clik(id)}>
      <div className="card_hover">
        <span
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          onClick={babling}
        >
          <button
            onClick={() =>
              addCart(id, img, text, title, price, old_price, skit)
            }
          >
            Add to cart
          </button>
        </span>
        <div className="hover">
          <img src={share} alt="" />
          <img src={comp} alt="" />
          <div className="like">
            <span
              className="like_svg"
              onClick={liked ? handleUnlike : handleLike}
            >
              {liked ? <LikeL /> : <Like />}
            </span>
            <img src={likePng} alt="" />
          </div>
        </div>
      </div>
      <div className="img">
        <img src={img} alt="" />
        <div
          className="skit"
          style={{
            backgroundColor:
              skit > 29 ? " rgb(232, 111, 111)" : "rgb(47, 194, 172)",
          }}
        >
          {skit > 29 ? `-${skit}%` : "New"}
        </div>
      </div>
      <div className="dec">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="pric">
          <p>Rp{pirc}</p>
          <p>
            <s>Rp{old}</s>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
