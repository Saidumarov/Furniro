import "./index.scss";
import img from "../../assets/Group 57.png";
import img1 from "../../assets/ci_grid-big-round.png";
import img2 from "../../assets/bi_view-list.png";
import Cart from "../cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Footercomp from "../footercomp";
import "./index";
const ShopComp = ({ searchValue, handelSearch }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [grup, setGrup] = useState("all");
  const [orginal, setorginal] = useState([]);
  const [active, setactive] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3000/data").then((res) => {
        setData(res?.data);
        setorginal(res?.data);
      });
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Sahifani localStorage ga saqlash
    localStorage.setItem("currentPage", JSON.stringify(pageNumber));
  };

  useEffect(() => {
    // localStorage dan currentPage qiymatini olish
    const savedPage = JSON.parse(localStorage.getItem("currentPage"));

    // Agar saqlangan qiymat mavjud bo'lsa uni o'rnating
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);
  const handleChange = (event) => {
    setGrup(event.target.value);
    let value = event.target.value;
    let sortedData = [...orginal]; // orginal ma'lumotlarning bir nusxasini olamiz
    if (value === "expensive") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (value === "cheap") {
      sortedData.sort((a, b) => a.price - b.price);
    }
    setData(sortedData);
  };

  // filter

  const hendelFilter = (event) => {
    let value = event.target.value;
    setFilter(value);
    let filteredData = orginal?.filter((el) => {
      return value === "all" ? el : el?.category === value;
    });
    setData(filteredData); // Filtrlangan ma'lumotlarni saqlash
  };

  // search
  useEffect(() => {
    let search = orginal?.filter((el) => {
      return (
        el?.title?.toLowerCase().includes(searchValue) ||
        el?.text?.toLowerCase().includes(searchValue) ||
        el?.category?.toLowerCase().includes(searchValue)
      );
    });
    setData(search);
  }, [searchValue]);

  return (
    <>
      <section className="shopComp">
        <div className="container">
          <h2>Shop</h2>
          <p className="text">
            Home
            <span>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
              </svg>
            </span>
            Shop
          </p>
        </div>
      </section>
      <div className="filter_shop">
        <div className="container">
          <div className="filter_left">
            <img src={img} alt="" onClick={() => setactive(!active)} />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <p className="p"></p>
            <p className="text">Showing 1–16 of 32 results</p>
          </div>
          <div className={`filter_product ${active ? "active" : ""}`}>
            <select className="in1" value={filter} onChange={hendelFilter}>
              <option value="all">All</option>
              <option value="desk">Desk</option>
              <option value="chair">Chair</option>
              <option value="beds">Beds </option>
            </select>
          </div>
          <div className="filter_right">
            <p className="show">Show</p>
            <input
              type="tel"
              placeholder="16"
              className="in"
              maxLength="2"
              required
            />
            <p className="sort">Short by</p>
            <select value={grup} onChange={handleChange} className="in1">
              <option value="all">Default</option>
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap </option>
            </select>
          </div>
        </div>
      </div>
      <div className="products" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="products_w">
            {currentItems?.map((el, i) => (
              <Cart key={i} {...el} />
            ))}
          </div>
        </div>
      </div>
      <div className="page">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <button
              style={{ display: currentPage <= 1 && "none" }}
              className="page-item"
              id="page"
              disabled={currentPage <= 1}
              onClick={() => paginate(currentPage - 1)}
            >
              Prev
            </button>

            {Array.from(
              { length: Math.ceil(data.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  className={`page-item1 ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  <span className="page-link">{i + 1}</span>
                </button>
              )
            )}

            <button
              className="page-item"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
            >
              Next
            </button>
          </ul>
        </nav>
      </div>
      <Footercomp />
    </>
  );
};

export default ShopComp;
