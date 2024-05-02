import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bootstrap.min.css";
import "./owl.carousel.min.css";
import "../css/ds/style.css";
import Scrollbar from 'react-scrollbars-custom';

import logo from '../img/logo.png'
function HeaderPage() {
    const [isViewAll, setViewAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/movie/search?term=${searchTerm}`);
                console.log(response.data);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchTerm !== '') {
            fetchData();
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);
    const isResult = () => {
        if (searchResults.length !== 0) setViewAll(!isViewAll);

        return isViewAll;
    }
    return (
        <header className="header">

            <div className="container" style={{ maxWidth: `unset` }}>

                <div className="row" style={{ flexWrap: `nowrap` }}>
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a href="#index"> <img src={logo} alt="" /></a>
                        </div>
                    </div>


                    <div className="col-lg-3">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu" id="nav">
                                <ul style={{ justifyContent: `flex-start`, textWrap: `nowrap` }}>
                                    <li><a href="">Trang chủ</a></li>
                                    <li><a href="#"
                                        className="arrow_carrot-down">Thể loại</a>
                                        <div className="dropdown">
                                            <ul className="genreDropdown">
                                                {/* Render ra the loai */}
                                                <li><a href="/categories">Hành động</a></li>
                                                <li><a href="/servicePack">Lãng mạn</a></li>
                                                <li><a href="/categories">Học đường</a></li>
                                                <li><a href="/categories">Kinh dị</a></li>
                                                <li><a href="/categories">Viễn tưởng</a></li>
                                                <li><a href="/categories">Phiêu lưu</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100093516980874"> Liên hệ</a>
                                    </li>
                                    <li><a href="#">Ngôn ngữ</a>
                                        <div className="dropdown2">
                                            <ul>

                                                <li style={{ color: 'black' }}><a href="">Tiếng Việt</a></li>
                                                <li style={{ color: 'black' }}><a href="">English</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="header__right">
                            <form className="searchTag" id="search-name">
                                <div className="search-container searchInput">
                                    <input type="text" className="search-input" id="search-input" placeholder="Tìm kiếm..."
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <span className="search-icon"><i className="fas fa-search"></i></span>
                                </div>

                                <div id="search-results">
                                    <Scrollbar style={{ width: 250, height: 250 }}>
                                        <p>Hello world!</p>
                                    </Scrollbar>
                                    {searchResults.map((result) => (

                                        <li className="result-input" key={result.id}>
                                            <a href="">
                                                <img className="image_result" src={result.avatarMovie} />{result.name}
                                            </a>
                                        </li>

                                    ))}
                                    {
                                        isResult ? <a className="view-all-result" style={{ display: "block" }}>Xem tất cả</a> :
                                            <a className="view-all-result" style={{ display: "none" }} />
                                    }

                                </div>
                            </form>
                        </div>

                        <div id="search-results"></div>
                        <div className="iconSearch">
                            <table id="renderSearch"></table>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header__right">
                            <div className="" style={{ textWrap: `noWrap` }}>
                                <a href="login.jsp">Đăng nhập</a><font color="#e53637"> / </font><a href="signup.jsp">Đăng ký</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="mobile-menu-wrap"></div>

            </div>
            <div id="loadingAnime">
                <div className="loadingAnime"></div>
            </div>

        </header>);
}

export default HeaderPage;