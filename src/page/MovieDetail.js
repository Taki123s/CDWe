import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/moviedetail.css";
import MovieComment from "./MovieComment.js";
import Footer from "./Footer.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { useTranslation, Trans } from "react-i18next";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import './bootstrap.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
        const response = await axios.get(`http://localhost:8080/movie/same/${id}`);
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
    if(user!=null){
    const fetchData = async () => {
      try {
        if(user!=null){
          const response = await axios.get(`http://localhost:8080/follow?movieId=${id}&userId=${user.idUser}`);
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

    if(user!=null){
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
    }else {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <p>Vui long dang nhap ! </p>
            </div>
          );
        }
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
                <a><Trans i18nKey={"menu.home"}>{t("menu.home")}</Trans></a>
                <a href=""><Trans i18nKey={"content.moviedetail"}>{t("content.moviedetail")}</Trans></a>
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
                  <img className="movie-image" src={movie.avatarMovie} alt="movie" />
                  <div className="anime__details__btn icon-layer">
                    {isFavorite ? (
                      <FaHeart onClick={AddFavorite} style={{ color: "red", fontSize: "25px" }} />
                    ) : (
                      <FaRegHeart onClick={AddFavorite} style={{ color: "black", fontSize: "25px" }} />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__widget">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li><span><Trans i18nKey={"content.type"}>{t("content.type")}</Trans>:</span>
                          {movie.genres && movie.genres.map((genre, index) => (
                            <button key={index} className="btn btn-outline-light" style={{ color: "blue" }}>{genre.description}</button>
                          ))}
                          <span>{}</span>
                        </li>
                        <li><span><Trans i18nKey={"menu.categories"}>{t("menu.categories")}</Trans>:</span>
                          {genres.map((genre, index) => (
                            <button key={index} className="btn btn-outline-light" style={{ color: "blue" }}>{genre.description}</button>
                          ))}
                        </li>
                        <li><span><Trans i18nKey={"content.producer"}>{t("content.producer")}</Trans>:</span>{movie.producer}</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li><span><Trans i18nKey={"content.duration"}>{t("content.duration")}</Trans>:</span>24 min/ep</li>
                        <li><span><Trans i18nKey={"content.quality"}>{t("content.quality")}</Trans>:</span>HD</li>
                        <li><span><Trans i18nKey={"content.views"}>{t("content.views")}</Trans>:</span>0{/* {movie.views.length} */}</li>
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
                  <text className="des_detail">{movie.vietnameseDescriptions != null ?
                    movie.vietnameseDescriptions.substring(0, 500) : ""}</text>
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
                      <i> {t("content.showless")}</i>
                    </a>
                  </>
                ) : (
                  <a onClick={() => ShowMore()}>
                    <i> {t("content.showmore")}</i>
                  </a>
                )}
              </div>
            </div>
            <div className="mt-3">
              {movie_same_series.map((movie, index)=> (
                <button  key={index} type="button" class="btn btn-outline-dark ml-2" >{movie.seriesDescriptions}</button>

              ))}

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
