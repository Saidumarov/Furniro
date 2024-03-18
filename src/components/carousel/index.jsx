import "./index.scss";
import img from "../../assets/Rectangle 24.png";
import img1 from "../../assets/Rectangle 25.png";
import img2 from "../../assets/Rectangle 41.png";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <>
      <section className="carausel">
        <div className="container">
          <div className="carausel_w">
            <div className="carausel_left">
              <div>
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>
                  Our designer already made a lot of beautiful <br /> prototipe
                  of rooms that inspire you
                </p>
                <button>Explore More</button>
              </div>
            </div>
            <div className="carausel_right">
              <Slider {...settings}>
                <div className="carusel_item">
                  <img src={img} alt="" />
                  <div className="hover">
                    <p className="hover_p">
                      01
                      <svg
                        width="27"
                        height="2"
                        viewBox="0 0 27 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H27" stroke="#616161" />
                      </svg>
                      Bed Room
                    </p>
                    <h3>Inner Peace</h3>
                    <div className="next">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12H3M21 12L15 6M21 12L15 18"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="carusel_item">
                  <img src={img1} alt="" />
                  <div className="hover">
                    <p className="hover_p">
                      01
                      <svg
                        width="27"
                        height="2"
                        viewBox="0 0 27 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H27" stroke="#616161" />
                      </svg>
                      Bed Room
                    </p>
                    <h3>Inner Peace</h3>
                    <div className="next">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12H3M21 12L15 6M21 12L15 18"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="carusel_item">
                  <img src={img2} alt="" />
                  <div className="hover">
                    <p className="hover_p">
                      01
                      <svg
                        width="27"
                        height="2"
                        viewBox="0 0 27 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H27" stroke="#616161" />
                      </svg>
                      Bed Room
                    </p>
                    <h3>Inner Peace</h3>
                    <div className="next">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12H3M21 12L15 6M21 12L15 18"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
