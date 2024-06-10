import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";

function MovieFollowItem({ movie, user, onRefresh }) {
    const RemoveFavorite = () => {
        console.log(movie.id, user.idUser);

        const newfollow = {
            status: 0,
            userId: user.idUser,
            movieId: movie.id,
        };
        axios
            .post("http://localhost:8080/follow/save", newfollow)
            .then((response) => {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className="custom-ui">
                                <p>Xóa thành công! </p>
                            </div>
                        );
                    },
                });
                onRefresh();
            })
            .catch((error) => {
                console.error("Error posting comment:", error);
            });
    };
    return (
        <div className="movie row" style={{ marginTop: "1%" }}>
      <span   className="image_movie col-md-3" col-md-3>
        <img className="" src={movie.avatarMovie} alt="movie"></img>
      </span>
            <Link to={`/movie/${movie.id}`}> <span className="title_movie col-md-3">
        {movie.name}
      </span></Link>


            <span className="movie_time col-md-3">40 phút</span>
            <span className="movie_viewer col-md-3">{movie.views.length}</span>
            <span className="movie_icon col-md-3" onClick={RemoveFavorite}>
        <MdDelete />
      </span>
            <br></br>
        </div>
    );
}

export default MovieFollowItem;
