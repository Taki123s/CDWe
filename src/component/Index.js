import React, {useState, useEffect} from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import './bootstrap.min.css'; // Import Bootstrap CSS
import './owl.carousel.min.css';
import Carousel from './Carousel';
import Topview from './Topview';

import '../css/ds/style.css'
import ProductItem from '../page/ProductItem';
import ExecutePaymentComponent from "./ExecutePaymentComponent";
import {Link} from "react-router-dom";

function AnimePage() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchMovies();
    }, [currentPage]); // Fetch movies when currentPage changes

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/movie/index?page=${currentPage - 1}&size=${pageSize}`);
            const responseData = response.data;
            setMovies(responseData.movies);
            setTotalPages(Math.ceil(responseData.totalMovies / pageSize));
            console.log(responseData)
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (

        <div id="ah_wrapper">
            <section className="hero">
                <div className="container">

                    <div><Carousel/></div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="trending__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Mới cập nhật</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                    </div>
                                </div>
                                <div className="row">
                                    {movies.map(movie => (
                                        <div className="col-lg-4 col-md-6 col-sm-6" key={movie.id}>
                                            <div className="product__item">
                                                <div className="product__item__pic set-bg"
                                                     style={{backgroundImage: `url(${movie.avatarMovie})`}}>
                                                    <div
                                                        className="ep">{movie.currentChapters.length} / {movie.totalChapters}</div>
                                                    <div className="view"><i className="fa fa-eye"></i> {movie.views}
                                                    </div>
                                                </div>
                                                <div className="product__item__text">
                                                    <h5><Link to="/">{movie.name}</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <Topview/>
                    </div>
                    <div className="col-md-6">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end mb-0">
                                {Array.from({length: totalPages}, (_, index) => (
                                    <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
                                        <a className="page-link" onClick={() => handlePageChange(index + 1)}>
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>


            </section>
        </div>

    );
}

export default AnimePage;
