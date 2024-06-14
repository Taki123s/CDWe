import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {FaFastForward} from "react-icons/fa";
import {createRoot} from "react-dom/client";
import {findMovieWatching} from "../service/MovieServices";
import {usePlyr} from "plyr-react";
import "plyr-react/plyr.css";
import {Link} from "react-router-dom";
import {Comment} from "../component/Comment";
import Cookies from "js-cookie";

import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const MovieWatching = () => {
    const navigate = useNavigate();
    const {movieId, ordinal} = useParams();
    const [movie, setMovie] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [videoSrc, setVideoSrc] = useState([]);
    const currentUrl = `http://animeweb.site/movies/${movieId}&${ordinal}`;
    const PlyrPlayer = React.forwardRef((props, ref) => {
        const {source, options = null, ...rest} = props;
        const playerRef = React.useRef(videoSrc);

        usePlyr(playerRef, {
            source,
            options,
        });
        React.useImperativeHandle(ref, () => ({}));
        return (
            <div id="player">
                <video ref={ref} className="plyr-react plyr" {...rest} />
            </div>
        );
    });
    useEffect(() => {

        const token = Cookies.get("jwt_token");
        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'Watching Failed',
                text: 'Please login and buy service pack to watch movie.',
                showConfirmButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');
                }
            });
        }
        findMovieWatching(movieId, token)
            .then((response) => {
                if (!response.data) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Watching Failed',
                        html: 'You not buy or your pack was expired!<br>' +
                            'Please buy service pack to watch movie!<br>' +
                            'If you have any questions, please contact support.',
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/servicePack')
                        }
                    });
                } else {
                    setMovie(response.data);
                    const sortedChapters = response.data.currentChapters.sort(
                        (a, b) => a.ordinal - b.ordinal
                      );
                    setChapters(sortedChapters);
                    window.scrollTo(0, 0);
                }


            })
            .catch((error) => {


            });
    }, [movieId, ordinal]);
    useEffect(() => {
        setVideoSrc(chapters.filter((chapter) => chapter.ordinal == ordinal)[0]?.link);
    }, [chapters,ordinal]);
    useEffect(() => {
        const skip = () => {
            const vd = document.querySelector("#player video");
            vd.currentTime = document.getElementById("openingValue").value;
        };
        const addSkipButton = () => {
            const controls = document.querySelector(".plyr__controls");
            const container = document.createElement("div");
            const root = createRoot(container);
            root.render(
                <button
                    id="skipOpening"
                    className="plyr__controls__item plyr__control"
                    aria-hidden="true"
                    onClick={skip}
                >
                    <FaFastForward/>
                </button>
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
                        <div className="breadcrumb__links" style={{display: "flex"}}>
                            <p>Trang chủ</p>
                            <p> /</p>
                            <p>{movie.name}</p>
                            <p> /</p>
                            <p>Chap {ordinal}</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="anime-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="anime__video__player">
                                <PlyrPlayer
                                    source={{
                                        type: "video",
                                        sources: [
                                            {
                                                src: videoSrc,
                                                type: "video/mp4",
                                            },
                                        ],
                                    }}
                                    options={{
                                        controls: [
                                            "play-large",
                                            "play",
                                            "progress",
                                            "current-time",
                                            "mute",
                                            "volume",
                                            "captions",
                                            "settings",
                                            "pip",
                                            "airplay",
                                            "fullscreen",
                                        ],
                                        autoplay: true,
                                        settings: ["captions", "quality", "speed", "loop"],
                                    }}
                                />
                            </div>
                            <div className="anime__details__episodes">
                                <div className="section-title">
                                    <h5>Danh sách tập</h5>
                                </div>
                                {chapters.map((chap) => {
                                    let isActive = chap.ordinal == ordinal;
                                    return (
                                        <Link
                                            to={`/movie/watching/${movieId}/${chap.ordinal}`}
                                            key={chap.ordinal}
                                            className={isActive ? "activeEpisode" : ""}
                                        >
                                            Ep {chap.ordinal}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="anime__details__review">
                        <div className="row row-no-gutters">
                            <div className="section-title col-xs-6 comment-tile"><h5> Bình luận</h5></div>
                            <Comment appId="583739630280650" url={currentUrl}/>
                        </div>
                    </div>
                </div>
            </section>
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
