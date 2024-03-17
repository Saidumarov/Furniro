import "./index.scss";
import share from "../../assets/Frame 11.png";
import comp from "../../assets/Frame 12.png";
import likePng from "../../assets/Like.png";
import Like, { LikeL } from "../../constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ id, price, old_price, title, text, skit, img }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLiked(storedLikes[id] || false);
  }, [id]);

  const handleLike = () => {
    const updatedLikes = { ...JSON.parse(localStorage.getItem("likes")) };
    updatedLikes[id] = true;
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    setLiked(true);
  };

  const handleUnlike = () => {
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
        };
        const cards = [...shop, obj];
        localStorage.setItem("shop", JSON.stringify(cards));
        toast.success("Add Cart");
      }
    }
  };

  return (
    <div className="cart_w">
      <div className="card_hover">
        <button
          onClick={() => addCart(id, img, text, title, price, old_price, skit)}
        >
          Add to cart
        </button>
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
          <p>Rp{price}</p>
          <p>
            <s>Rp{old_price}</s>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
