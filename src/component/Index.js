import React, {useState, useEffect} from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import {Link} from 'react-router-dom';
import Carousel from './Carousel';
import Topview from './Topview';
import { useTranslation, Trans } from "react-i18next";

// import '../i18n';
function AnimePage() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [totalPages, setTotalPages] = useState(1);
    const [sortBy, setSortBy] = useState('createAt');
    const [ascending, setAscending] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetchMovies();
    }, [currentPage, sortBy, ascending]); // Fetch movies when currentPage, sortBy or ascending changes

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/movie/index?page=${currentPage - 1}&size=${pageSize}&sortBy=${sortBy}&ascending=${ascending}`);
            const responseData = response.data;
            setMovies(responseData.movies);
            setTotalPages(Math.ceil(responseData.totalMovies / pageSize));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleOrderChange = (event) => {
        const selectedOption = event.target.value;

        // Nếu chọn A-Z hoặc Newest
        if (selectedOption === 'asc') {
            setAscending(true); // Cập nhật thứ tự sắp xếp là tăng dần
        } else {
            // Nếu chọn Z-A hoặc Oldest
            setAscending(false); // Cập nhật thứ tự sắp xếp là giảm dần
        }
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
                                            <h4>{t("content.latestupdate")}</h4>
                                            <div className="sort">
                                                <select className="filter" value={sortBy} onChange={handleSortChange}>
                                                    <option value="createAt">{t("content.time")}</option>
                                                    <option value="name">Name</option>
                                                </select>
                                                {sortBy === 'createAt' ? (
                                                    // Nếu là thời gian, hiển thị lựa chọn sắp xếp thời gian
                                                    <select className="filter" value={ascending ? 'asc' : 'desc'} onChange={handleOrderChange}>
                                                        <option value="desc">{t("sort.new")}</option>
                                                        <option value="asc">{t("sort.oldest")}</option>
                                                    </select>
                                                ) : (
                                                    // Nếu là tên, hiển thị lựa chọn sắp xếp theo tên
                                                    <select className="filter" value={ascending ? 'asc' : 'desc'} onChange={handleOrderChange}>
                                                        <option value="asc">A-Z</option>
                                                        <option value="desc">Z-A</option>
                                                    </select>
                                                )}
                                            </div>
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
                                                    <div className="view"><i className="fa fa-eye"></i> {movie.views.length}
                                                    </div>
                                                </div>
                                                <div className="product__item__text">
                                                <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
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
                                    <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                                        key={index}>
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
