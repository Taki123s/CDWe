import React from "react";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';
import MovieComment from "./MovieComment";
import MovieComponent from "../component/movieComponent";
import { useEffect } from "react";
import { FaFastForward } from "react-icons/fa";
import ReactDOM from 'react-dom';
import { FaHome } from 'react-icons/fa';

const data = [
  { idMovie: 1, episode: 1 },
  { idMovie: 1, episode: 2 },
  { idMovie: 1, episode: 3 },

];

const MovieWatching = () => {
  const { id, chapter} = useParams();
  useEffect(() => {
    const skip = () => {
      const vd = document.querySelector("#player video");
      vd.currentTime = document.getElementById("openingValue").value;
    };

    const addSkipButton = () => {
      const controls = document.querySelector(".plyr__controls");
      const container = document.createElement("div");
      ReactDOM.render(
        <button id="skipOpening" className="plyr__controls__item plyr__control" aria-hidden="true" onClick={skip}>
          <FaFastForward />
        </button>,
        container
      );
  
   
      controls.prepend(container);
    };
  
    addSkipButton();
  }, []);

  return (
    <div className="breadcrumb-option">
      <div id="player"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <a href="/"><i><FaHome /></i></a> 
              <span>Phim gì ai mà biết</span>
            </div>
          </div>
        </div>
      </div>
      <section className="anime-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="anime__video__player">
              <MovieComponent/>
                <input type="text" id="openingValue" readOnly value="10" hidden />
              </div>
              <div className="anime__details__episodes">
                <div className="section-title">
                  <h5>Danh sách tập</h5>
                </div>
                {data.map((dt) => {
                const isActive = dt.episode == chapter;
                return (
                <a href={`/watching/${id}/${dt.episode}`} className={isActive ? 'activeEpisode' : ''}>Ep {dt.episode}</a>

                );
                })}

              </div>
            </div>
          </div>
          <div className="">
              <MovieComment/>
          </div>
        </div>
      </section>
      <Footer/>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close"></i>
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
              readOnly
            />
          </form>
        </div>
      </div>

    </div>

  );
};

export default MovieWatching;
