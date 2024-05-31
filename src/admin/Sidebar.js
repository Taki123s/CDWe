import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Ensure react-router-dom is installed
import HeaderAdmin from './HeaderAdmin';
//
// import "../css/admin.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'; // Import Line Awesome CSS
// import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS



const Sidebar = () => {
    const [activePath, setActivePath] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    useEffect(() => {
        const activeNav = () => {
            const childActives = document.querySelectorAll('.childActive');
            childActives.forEach(child => {
                const url = child.querySelector('a').getAttribute('href');
                if (activePath.includes(url)) {
                    child.classList.add('active');
                    child.closest('.parentActive').classList.add('active');
                }
            });
        };
        activeNav();
    }, [activePath]);

    return (
        <>
            <HeaderAdmin />
            <div className="iq-sidebar">
                <div className="iq-navbar-logo d-flex justify-content-between">
                    <Link to="/admin/dashBoard" className="header-logo">
                        <img src="../img/logonweb.png" className="img-fluid rounded" alt="" />
                        <span>AnimeWeb</span>
                    </Link>
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="main-circle">
                                <i className="ri-menu-line"></i>
                            </div>
                            <div className="hover-circle">
                                <i className="ri-close-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li className="parentActive">
                                <a href="#dashboard" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true">
                                    <span className="ripple rippleEffect"></span>
                                    <i className="las la-home iq-arrow-left"></i>
                                    <span>Bảng điều khiển</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                </a>
                                <ul id="dashboard" className="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
                                    <li className="childActive">
                                        <Link to="/admin/dashBoard">
                                            <i className="las la-laptop-code"></i>Thống kê
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="parentActive">
                                <a href="#userinfo" className="iq-waves-effect" data-toggle="collapse" aria-expanded="false">
                                    <span className="ripple rippleEffect"></span>
                                    <i className="las la-user-tie iq-arrow-left"></i>
                                    <span>Quản lý người dùng</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                </a>
                                <ul id="userinfo" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle" >
                                    <li className="childActive">
                                        <Link to="/admin/UserAdd">
                                            <i className="las la-plus-circle"></i>Thêm người dùng
                                        </Link>
                                    </li>
                                    <li className="childActive">
                                        <Link to="/admin/UserList">
                                            <i className="las la-th-list"></i>Danh sách người dùng
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="parentActive">
                                <a href="https://analytics.google.com/analytics/web/#/p380852987/reports/reportinghub?params=_u..nav%3Dmaui%26_r.14..selmet%3D%5B%22conversions%22%5D"
                                   target="_blank" className="iq-waves-effect">
                                    <span className="ripple rippleEffect"></span>
                                    <i className="las la-user-tie iq-arrow-left"></i>
                                    <span>Google Analytics</span>
                                </a>
                            </li>
                            <li className="parentActive">
                                <a href="#movie" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="ri-pie-chart-box-line iq-arrow-left"></i>
                                    <span>Quản lý phim</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                </a>
                                <ul id="movie" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="childActive">
                                        <Link to="/admin/MovieList">
                                            <i className="ri-folder-chart-2-line"></i>Danh sách phim
                                        </Link>
                                    </li>
                                    <li className="childActive">
                                        <Link to="/admin/MovieAdd">
                                            <i className="ri-folder-chart-2-line"></i>Nhập phim mới
                                        </Link>
                                    </li>
                                    <li className="childActive">
                                        <Link to="/admin/GenreList">
                                            <i className="ri-folder-chart-2-line"></i>Danh sách thể loại
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-3"></div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
