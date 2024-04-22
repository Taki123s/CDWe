import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bootstrap.min.css";
import "./owl.carousel.min.css";
import Carousel from "./Carousel";

import "../css/ds/style.css";
function CategoriesPage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("AtoZ");
  const [categorieId, setCateId] = useState("action");
  useEffect(() => {
    filterMovie(categorieId, filter);
  }, [categorieId, filter]);

  const filterMovie = async (categorieId, filter) => {
    try {
      const response = await axios.post("/anime-main/Categories", {
        categorieId,
        filter,
      });
      setMovies(response.data.renderMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleCateChange = (event) => {
    setCateId(event.target.value);
  };
  return (
    <div id="ah_wrapper">
      <section className="hero">
        <div className="container">
          <div>
            <Carousel />
          </div>
        </div>
      </section>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="container">
                <div className="trending__product" id="">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title">
                        <h4>Hành động</h4>
                      </div>
                      <div className="section-title">
                        <form
                          className="sort"
                          id="sort"
                          action=""
                          method="post"
                        >
                          <label
                            htmlFor="filter"
                            className="section-title h4"
                            style={{ color: `red`, fontSize: `1.5rem` }}
                          >
                            Lọc
                          </label>
                          <select name="filter" id="filter">
                            <option value="isAtoZ">A-Z</option>
                            <option value="notAtoZ">Z-A</option>
                            <option value="isDescDate">Mới nhất</option>
                            <option value="notDescDate">Cũ nhất</option>
                          </select>
                          <button
                            type="submit"
                            style={{ display: `none` }}
                          ></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <a href="#">
                        <div
                          className="product__item__pic set-bg"
                          style={{
                            backgroundImage: `url("https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg")`,
                          }}
                        >
                          <div className="ep">18 / 18</div>
                          <div className="view">
                            <i className="fa fa-eye"></i> 9141
                          </div>
                        </div>
                        <div className="product__item__text">
                          <h5>
                            <a href="#">
                              The Seven Deadly Sins: Wrath of the Gods
                            </a>
                          </h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        style={{
                          backgroundImage: `url("img/trending/trend-2.jpg")`,
                        }}
                      >
                        <div className="ep">18 / 18</div>

                        <div className="view">
                          <i className="fa fa-eye"></i> 9141
                        </div>
                      </div>
                      <div className="product__item__text">
                        <h5>
                          <a href="#">
                            Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoriesPage;