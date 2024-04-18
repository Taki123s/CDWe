import React from 'react';
import { useParams } from 'react-router-dom';
// import '../component/bootstrap.min.css';
// import '../component/owl.carousel.min.css';
// import "react-multi-carousel/lib/styles.css";
import '../css/moviedetail.css';
import MovieComment from './MovieComment.js'; // Import MovieComment component
import Footer from './Footer.js';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Icon, { HeartOutlined, HeartFilled, NotificationFilled, AppleFilled } from '@ant-design/icons';
function MovieDetail() {
    // Lấy id của phim từ URL
    const { id } = useParams();
    console.log(id)

    // Giả sử dữ liệu phim được truyền vào component
    const movie = {
        id: 1,
        name: "The Seven Deadly Sins: Wrath of the Gods",
        avatars: [
            { name: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg" },
            { name: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg" },
            { name: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg" }
        ],
        type: { description: "Action" },
        genres: [
            { id: 1, description: "Action" },
            { id: 2, description: "Adventure" },
            { id: 3, description: "Fantasy" }
        ],
        listProducer: [
            { name: "Producer 1" },
            { name: "Producer 2" }
        ],
        views: 9141,
        avgRate: 4.5,
        description: "D-Fragments! là bộ phim kể về nhân vật Kazama Kenji luôn tưởng rằng mình là một tên lưu manh thứ dữ và ai cũng phải khiếp sợ cậu. Nhưng đến khi Kazama Kenji gặp phải tứ quái cô nương Chitose, Sakura, Minami và Roka thì cậu đã biết mình chẳng là gì so với những gì mà các cô nương quái chiêu đã gây ra cho anh. Bởi từ lâu Kenji đã lọt vào tầm ngắm của tứ quái cô nương và Kenji bị buộc phải tham gia vào CLB của họ. Cuộc đời học sinh của Kazama Kenji sẽ ra sao? Đón Xem D-Fragments! tại ứng dụng giải trí POPS. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",

    };


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
                                    <img className='movie-image' src={movie.avatars.length > 0 ? movie.avatars[0].name : 'placeholder_image_url'} alt="movie" />
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
                                                    <span>{movie.type.description}</span>
                                                </li>
                                                <li>
                                                    <span>Categories:</span>
                                                    {movie.genres.map((genre, index) => (
                                                        <div key={index}><a href=""><button className="btn btn-outline-light" style={{ color: 'blue' }}>{genre.description}</button></a></div>
                                                    ))}
                                                </li>
                                                <li>
                                                    <span>Producer:</span>
                                                    {movie.listProducer.map((producer, index) => (
                                                        <span key={index}>{producer.name}</span>
                                                    ))}
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
                                    {movie.description.substring(0, 500)}
                                </text>
                                {flag ?
                                    <>
                                        <text> {movie.description.substring(500, movie.description.length)}</text>
                                        : <a onClick={() => ShowMore()}><i>Rút gọn</i> </a>
                                    </>
                                    : <a onClick={() => ShowMore()}><i>Xem thêm</i> </a>}
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
