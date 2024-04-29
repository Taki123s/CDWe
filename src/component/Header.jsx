import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bootstrap.min.css";
import "./owl.carousel.min.css";
import "../css/ds/style.css";

import logo from '../img/logo.png'
// let searchResultsVisible = false;
// function toggleSearchResults() {
//     if (searchResultsVisible) {
//         document.getElementById("search-results").classList.add("hidden");
//         searchResultsVisible = false;
//     } else {
//         document.getElementById("search-results").classList.remove("hidden");
//         searchResultsVisible = true;
//     }
// }
// function searchByName(input) {
//     let searchBox = $('#search-input').val();
//     $.ajax({
//         url: "/anime-main/SearchByName",
//         type: "GET",
//         data: {
//             searchBox: searchBox,
//         },
//         success: function (data) {
//             let jsonData = JSON.parse(data);
//             // Render dữ liệu lên trang web
//             let html = '';
//             for (let i = 0; i < jsonData.length; i++) {
//                 html += '<li class="result-input"><a href="MovieDetail?idMovie=' + jsonData[i].id + '">' + jsonData[i].name +
//                     '<img src="' + jsonData[i].avatars[0].name + '"/></a></li>'
//             }
//             // $('#search-results').css("display", "block");
//             html += '<a href="/anime-main/SearchByName?viewall=' + encodeURIComponent(searchBox) + '">Xem tất cả</a>';
//             $('#search-results').html(html);
//         },
//         error: function () {
//             // Xử lý lỗi khi không lấy được dữ liệu
//             alert('Không lấy được dữ liệu');
//         }
//     });

// }

function HeaderPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/search?term=${searchTerm}`);
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

                                    <ul>
                                        {searchResults.map((result) => (
                                            <li key={result.id}>{result.name}</li>
                                        ))}
                                    </ul>

                                </div>
                                {/* <div className="iconSearch">
                                    <table id="renderSearch"></table>
                                </div> */}
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