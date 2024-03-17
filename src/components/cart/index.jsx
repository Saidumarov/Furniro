import "./index.scss";
const Cart = ({ id, price, old_price, title, text, skit, img }) => {
  return (
    <>
      <section>
        <div className="cart_w">
          <img src={img} alt="" />
        </div>
      </section>
    </>
  );
};

export default Cart;
