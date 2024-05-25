import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/moviedetail.css";
import MovieComment from "./MovieComment.js"; // Import MovieComment component
import Footer from "./Footer.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { useTranslation, Trans } from "react-i18next";
function MovieDetail() {
  const { t, i18n } = useTranslation();

  // Lấy id của phim từ URL
  const { id } = useParams();
  const [movie, setMovies] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movie/${id}`);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [flag, setFlag] = React.useState(false);

  const ShowMore = () => {
    console.log(movie.views.length);

    setFlag(!flag);
    return flag;
  };
  const [isFavorite, setFavorite] = React.useState(false);
  const AddFavorite = () => {
    setFavorite(!isFavorite);
    return isFavorite;
  };

  return (
    <div className="supermovie">
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__links">
                <a>
                  <Trans i18nKey={"menu.home"}>{t("menu.home")}</Trans>
                </a>
                <a href="">
                  {" "}
                  <Trans i18nKey={"content.moviedetail"}>
                    {t("content.moviedetail")}
                  </Trans>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" ">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-9 ">
                <div className="anime_details_title">
                  <h3 className=".text-primary-emphasis">{movie.name}</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="image-container">
                  <img
                    className="movie-image"
                    src={movie.avatarMovie}
                    alt="movie"
                  />
                  <div className="anime__details__btn icon-layer">
                    {/* Your logic for follow button here */}
                    {/* Your logic for purchase button here */}

                    {isFavorite ? (
                      <FaHeart
                        onClick={() => AddFavorite()}
                        style={{ color: "red", fontSize: "25px" }}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={() => AddFavorite()}
                        style={{ color: "black", fontSize: "25px" }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__widget">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>
                          <span>
                            <Trans i18nKey={"content.type"}>
                              {t("content.type")}:
                            </Trans>
                          </span>
                          {movie.genres &&
                            movie.genres.map((genre, index) => (
                              <button
                                key={index}
                                className="btn btn-outline-light"
                                style={{ color: "blue" }}
                              >
                                {genre.description}
                              </button>
                            ))}
                          <span>{}</span>
                        </li>
                        <li>
                          <span>
                            <Trans i18nKey={"menu.categories"}>
                              {t("menu.categories")}
                            </Trans>
                          </span>
                          Tình cảm
                          <> </>Hài hước
                        </li>
                        <li>
                          <span>
                            {" "}
                            <Trans i18nKey={"content.producer"}>
                              {t("content.producer")}:
                            </Trans>
                          </span>
                          {movie.producer}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>
                          <span>
                            <Trans i18nKey={"content.duration"}>
                              {t("content.duration")}:
                            </Trans>
                          </span>
                          24 min/ep
                        </li>
                        <li>
                          <span>
                            <Trans i18nKey={"content.quality"}>
                              {t("content.quality")}:
                            </Trans>
                          </span>
                          HD
                        </li>
                        <li>
                          <span>
                            <Trans i18nKey={"content.views"}>
                              {t("content.views")}:
                            </Trans>
                          </span>{" "}
                          0{/* {movie.views.length} */}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 anime_showmore">
              <div className="anime__details__text">
                <div className="anime_details_title">
                  <text className="des_detail">
                    {movie.vietnameseDescriptions != null
                      ? movie.vietnameseDescriptions.substring(0, 500)
                      : ""}
                  </text>
                </div>
                {flag ? (
                  <>
                    <text className="des_detail">
                      {" "}
                      {movie.vietnameseDescriptions.substring(
                        500,
                        movie.vietnameseDescriptions.length
                      )}
                    </text>
                    <a onClick={() => ShowMore()}>
                      <i>Rút gọn</i>{" "}
                    </a>
                  </>
                ) : (
                  <a onClick={() => ShowMore()}>
                    <i>Xem thêm</i>{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
          <MovieComment />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MovieDetail;
