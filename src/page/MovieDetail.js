import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/moviedetail.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { useTranslation, Trans } from "react-i18next";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { LikeShare } from "../component/LikeShare";
import MovieComment from "./MovieComment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MovieDetail() {
  const { t, i18n } = useTranslation();
  var token = Cookies.get("jwt_token");
  const user = typeof token === "undefined" ? null : jwtDecode(token);
  const { id } = useParams();
  const [movie, setMovies] = useState("");
  const [genres, setGenres] = useState([]);
  const [movie_same_series, setMovieSameSeries] = useState([]);
  const [flag, setFlag] = useState(false);
  const [follow, setFollow] = useState("");
  const [isFavorite, setFavorite] = useState("");
  const currentUrl = `http://animeweb.site/like/${id}`;
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
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/movie/same/${id}`
        );
        setMovieSameSeries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/genre`);
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (user != null) {
      const fetchData = async () => {
        try {
          if (user != null) {
            const response = await axios.get(
              `http://localhost:8080/follow?movieId=${id}&userId=${user.idUser}`
            );
            if (response.data !== null) {
              setFollow(response.data);
              setFavorite(response.data.status);
            }
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, []);

  const ShowMore = () => {
    setFlag(!flag);
    return flag;
  };

  const AddFavorite = () => {
    // const alert = useAlert()

    if (user != null) {
      const newFavorite = !isFavorite;
      setFavorite(newFavorite);
      const currentDate = new Date().toISOString();
      const newfollow = {
        followAt: currentDate,
        status: newFavorite,
        userId: user.idUser,
        movieId: movie.id,
      };
      axios
        .post("http://localhost:8080/follow/save", newfollow)
        .then((response) => {})
        .catch((error) => {
          console.error("Error posting comment:", error);
          setFavorite(!isFavorite);
        });
    } else {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="custom-ui">
              <p>Vui long dang nhap ! </p>
            </div>
          );
        },
      });
    }
  };

  return (
    <div className="supermovie">
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a>
                  <Trans i18nKey={"menu.home"}>{t("menu.home")}</Trans>
                </a>
                <a href="">
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
                    {isFavorite ? (
                      <FaHeart
                        onClick={AddFavorite}
                        style={{ color: "red", fontSize: "25px" }}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={AddFavorite}
                        style={{ color: "black", fontSize: "25px" }}
                      />
                    )}
                  </div>

                </div>
                <div className="row" style={{ marginTop: "5%" }}>
                  <div className="anime__details__btn">
                    <Link
                        className="watch-btn"
                        to={`/movie/watching/${movie.id}/${1}`}
                    >
                      <button
                          id={"rateBtn"}
                          style={{
                            color: "white",
                            fontSize: "20px",
                            outline: "none",
                          }}
                      >
                        Watching
                      </button>
                      <i>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </i>
                    </Link>
                  </div>
                  <div className="mt-3">
                    {movie_same_series.map((movie, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-outline-dark ml-2"
                        >
                          {movie.seriesDescriptions}
                        </button>
                    ))}
                  </div>
                </div>


              </div>
              <div className="col-lg-9">
                <div
                  className="anime__details__widget"
                  style={{
                    height: "100%",
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>
                          <span>
                            <Trans i18nKey={"menu.categories"}>
                              {t("menu.categories")}
                            </Trans>
                            :
                          </span>
                          {genres.map((genre, index) => (
                            <Link
                              key={genre.id}
                              to={`/categories/${genre.id}/${genre.description}`}
                            >
                              <button
                                className="btn btn-outline-danger ml-2 hoverWhite"
                                style={{ color: "black",fontWeight:"500",marginTop:"10px",transform:"translate(-10%,-20%)" }}
                              >
                                {genre.description}
                              </button>
                            </Link>
                          ))}
                        </li>
                        <li>
                          <span>
                            <Trans i18nKey={"content.producer"}>
                              {t("content.producer")}
                            </Trans>
                            :
                          </span>
                          <span style={{width:"unset",fontWeight:"400"}}>{movie.producer}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li style={{display:"flex"}}>
                          <span>
                            <Trans i18nKey={"content.duration"}>
                              {t("content.duration")}
                            </Trans>
                          </span>
                          <span style={{width:"unset",fontWeight:"400"}}>24 min/ep</span>
                        </li>
                        <li>
                          <span>
                            <Trans i18nKey={"content.quality"}>
                              {t("content.quality")}
                            </Trans>
                          </span>
                          <span style={{width:"unset",fontWeight:"400"}}>HD</span>
                        </li>
                        <li>
                          <span>
                            <Trans i18nKey={"content.views"}>
                              {t("content.views")}
                            </Trans>
                          </span>
                          <span style={{width:"unset",fontWeight:"400"}}>0{/* {movie.views.length} */}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-9 anime_showmore">
                      <div className="anime__details__text">
                        <div className="anime_details_title">
                          <h4 className="des_detail">
                            {movie.vietnameseDescriptions != null
                                ? movie.vietnameseDescriptions.substring(0, 500)
                                : ""}
                          </h4>
                        </div>
                        {flag ? (
                            <>
                              <h5 className="des_detail">
                                {" "}
                                {movie.vietnameseDescriptions.substring(
                                    500,
                                    movie.vietnameseDescriptions.length
                                )}
                              </h5>
                              <a onClick={() => ShowMore()}>
                                <i> {t("content.showless")}</i>
                              </a>
                            </>
                        ) : (
                            <a onClick={() => ShowMore()}>
                              <i> {t("content.showmore")}</i>
                            </a>

                        )}<br></br>

                        <LikeShare appId="583739630280650" url={currentUrl} />
                      </div>
                    </div>
                  </div>
                  <div className="row" >
                    <div className="col-lg-6"><h2>Trailer</h2></div>
                  </div>
                  <div className="row" style={{ marginTop: "20px" }}>

                    <div className="col-lg-6">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="1236" height="695" src="https://www.youtube.com/embed/gq2xKJXYZ80"
                                title="Avatar: Dòng Chảy Của Nước | Official Trailer" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      </div>

          
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MovieComment />
        </div>
      </section>
    </div>
  );
}

export default MovieDetail;
