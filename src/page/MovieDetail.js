import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import '../css/moviedetail.css';
import MovieComment from './MovieComment.js'; // Import MovieComment component
import Footer from './Footer.js';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

import Icon, { HeartOutlined, HeartFilled, NotificationFilled, AppleFilled } from '@ant-design/icons';
function MovieDetail() {
    // Lấy id của phim từ URL
    const { id } = useParams();
    console.log(id)

    // Giả sử dữ liệu phim được truyền vào component
    const [movie, setMovies] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/movies/${id}`);
                console.log('response.data');
                console.log(response.data);

                setMovies(response.data);
                console.log(movie);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);


    const [flag, setFlag] = React.useState(false);

    const ShowMore = () => {
        setFlag(!flag);
        return flag;
    }
    const [isFavorite, setFavorite] = React.useState(false);
    const AddFavorite = () => {
        setFavorite(!isFavorite);
        return isFavorite;
    }

    return (
        <div className='supermovie'>
            <div class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__links">
                                <a > Trang chủ</a>
                                <a href=""> Chi tiết phim</a>

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
                                    <h3 className='.text-primary-emphasis'>{movie.name}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">

                                <div className="image-container">
                                    <img className='movie-image' src={movie.avatarMovie} alt="movie" />
                                    <div className="anime__details__btn icon-layer">
                                        {/* Your logic for follow button here */}
                                        {/* Your logic for purchase button here */}

                                        {isFavorite ?
                                            <FaHeart onClick={() => AddFavorite()} style={{ color: 'red', fontSize: '25px' }} />
                                            :
                                            <FaRegHeart onClick={() => AddFavorite()} style={{ color: 'black', fontSize: '25px' }} />
                                        }
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__widget">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <ul>
                                                <li>
                                                    <span>Type:</span>
                                                    <span>{}</span>
                                                </li>
                                                <li>
                                                    <span>Categories:</span>
                                                    {/* {movie.genres.map((genre, index) => (
                                                        <div key={index}><a href=""><button className="btn btn-outline-light" style={{ color: 'blue' }}>{}</button></a></div>
                                                    ))} */}
                                                </li>
                                                <li>
                                                    <span>Producer:</span>
                                                    {/* {movie.listProducer.map((producer, index) => (
                                                        <span key={index}>{producer.name}</span>
                                                    ))} */}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <ul>
                                                <li><span>Duration:</span>24 min/ep</li>
                                                <li><span>Quality:</span>HD</li>
                                                <li><span>Views:</span>{movie.views}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 anime_showmore">
                            <div className="anime__details__text">
                                <div className="anime_details_title">
                                    <h3>Mô tả:</h3>
                                </div>
                                <text className='des_detail'>
                                    {(movie.vietnameseDescriptions!=null)?movie.vietnameseDescriptions.substring(0, 500):""}
                                </text>
                                {/* {flag ?
                                    <>
                                        <text> {movie.vietnameseDescriptions.substring(500, movie.vietnameseDescriptions.length)}</text>
                                        : <a onClick={() => ShowMore()}><i>Rút gọn</i> </a>
                                    </>
                                    : <a onClick={() => ShowMore()}><i>Xem thêm</i> </a>} */}
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
