import "./index.scss";
import img1 from "../../assets/Rectangle 36.png";
import img2 from "../../assets/Rectangle 38.png";
import img3 from "../../assets/Rectangle 37.png";
import img4 from "../../assets/Rectangle 39.png";
import img5 from "../../assets/Rectangle 40.png";
import img6 from "../../assets/Rectangle 43.png";
import img7 from "../../assets/Rectangle 41.png";
import img8 from "../../assets/Rectangle 45.png";
import img9 from "../../assets/Rectangle 44.png";

const Furniture = () => {
  return (
    <>
      <section>
        <div className="furniture">
          <p>Share your setup with</p>
          <h2>#FuniroFurniture</h2>
          <div className="imgs_w">
            <div className="imgs_left">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <div className="imgs_l">
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="imgs_cen">
              <img src={img5} alt="" />
            </div>
            <div className="imgs_right">
              <div className="img_r1">
                <img src={img6} alt="" />
                <img src={img8} alt="" />
              </div>
              <div className="imgs_r">
                <img src={img7} alt="" />
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Furniture;
