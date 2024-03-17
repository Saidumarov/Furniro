import "./index.scss";
const Carousel = () => {
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
            <div className="carausel_right"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
