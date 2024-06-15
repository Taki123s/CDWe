import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuState, setMenuState] = useState({
    dashboard: true,
    userinfo: false,
    movie: false,
    supplier: false,
    producer: false,
    tables: false,
    bonus: false,
    role: false,
    log: false,
    keys: false,
  });

  const toggleMenu = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
      <div className="iq-sidebar">
        <div className="iq-navbar-logo d-flex justify-content-between">
          <a href="/dashboard" className="header-logo">
            <img src="../img/logonweb.png" className="img-fluid rounded" alt="" />
            <span>AnimeWeb</span>
          </a>
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
              <li className={menuState.dashboard ? "parentActive" : ""}>
                <a
                    href="#dashboard"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("dashboard")}
                    aria-expanded={menuState.dashboard}
                >
                  <i className="las la-home iq-arrow-left"></i>
                  <span>Bảng điều khiển</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="dashboard"
                    className={`iq-submenu collapse ${menuState.dashboard ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/dashboard">
                      <i className="las la-laptop-code"></i>Thống kê
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.userinfo ? "parentActive" : ""}>
                <a
                    href="#userinfo"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("userinfo")}
                    aria-expanded={menuState.userinfo}
                >
                  <i className="las la-user-tie iq-arrow-left"></i>
                  <span>Quản lý người dùng</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="userinfo"
                    className={`iq-submenu collapse ${menuState.userinfo ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/admin/AddUser">
                      <i className="las la-plus-circle"></i>Thêm người dùng
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/UserList">
                      <i className="las la-th-list"></i>Danh sách người dùng
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="parentActive">
                <a href="https://analytics.google.com/analytics/web/#/p380852987/reports/reportinghub?params=_u..nav%3Dmaui%26_r.14..selmet%3D%5B%22conversions%22%5D"
                   target="_blank" className="iq-waves-effect"><span
                    className="ripple rippleEffect"></span><i
                    className="las la-user-tie iq-arrow-left"></i><span>Google Analytics</span></a>

              </li>

              <li className={menuState.movie ? "parentActive" : ""}>
                <a
                    href="#movie"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("movie")}
                    aria-expanded={menuState.movie}
                >
                  <i className="ri-pie-chart-box-line iq-arrow-left"></i>
                  <span>Quản lý phim</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="movie"
                    className={`iq-submenu collapse ${menuState.movie ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/movie/list">
                      <i className="ri-folder-chart-2-line"></i>Danh sách phim
                    </Link>
                  </li>
                  <li>
                    <Link to="/movie/add">
                      <i className="ri-folder-chart-2-line"></i>Nhập phim mới
                    </Link>
                  </li>
                  <li>
                    <Link to="/genre/list">
                      <i className="ri-folder-chart-2-line"></i>Danh sách thể loại
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.supplier ? "parentActive" : ""}>
                <a
                    href="#supplier"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("supplier")}
                    aria-expanded={menuState.supplier}
                >
                  <i className="ri-pages-line iq-arrow-left"></i>
                  <span>Quản lý nhà cung cấp</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="supplier"
                    className={`iq-submenu collapse ${menuState.supplier ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/supplier/list">
                      <i className="ri-folder-chart-2-line"></i>Danh sách nhà cung cấp
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.producer ? "parentActive" : ""}>
                <a
                    href="#producer"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("producer")}
                    aria-expanded={menuState.producer}
                >
                  <i className="ri-pages-line iq-arrow-left"></i>
                  <span>Quản lý nhà sản xuất</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="producer"
                    className={`iq-submenu collapse ${menuState.producer ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/producer/list">
                      <i className="ri-folder-chart-2-line"></i>Danh sách nhà sản xuất
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.tables ? "parentActive" : ""}>
                <a
                    href="#tables"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("tables")}
                    aria-expanded={menuState.tables}
                >
                  <i className="ri-table-line iq-arrow-left"></i>
                  <span>Quản lý gói</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="tables"
                    className={`iq-submenu collapse ${menuState.tables ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/admin/packed-service">
                      <i className="ri-table-line"></i>Danh sách các gói
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/user-packed">
                      <i className="ri-database-line"></i>Danh sách thành viên
                    </Link>
                  </li>
                  <li>
                    <Link to="/import/coupons">
                      <i className="ri-folder-chart-2-line"></i>Lịch sử nhập phim
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.bonus ? "parentActive" : ""}>
                <a
                    href="#bonus"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("bonus")}
                    aria-expanded={menuState.bonus}
                >
                  <i className="ri-table-line iq-arrow-left"></i>
                  <span>Quản lý khuyến mãi</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="bonus"
                    className={`iq-submenu collapse ${menuState.bonus ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/admin/log">
                      <i className="ri-table-line"></i>Danh sách khuyến mãi
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.role ? "parentActive" : ""}>
                <a
                    href="#role"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("role")}
                    aria-expanded={menuState.role}
                >
                  <i className="ri-table-line iq-arrow-left"></i>
                  <span>Quản lý vai trò</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="role"
                    className={`iq-submenu collapse ${menuState.role ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/role">
                      <i className="ri-table-line"></i>Quản lý tổng
                    </Link>
                  </li>
                  <li>
                    <Link to="/role/add">
                      <i className="ri-table-line"></i>Tạo vai trò mới
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.log ? "parentActive" : ""}>
                <a
                    href="#log"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("log")}
                    aria-expanded={menuState.log}
                >
                  <i className="ri-table-line iq-arrow-left"></i>
                  <span>Quản lý Log</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="log"
                    className={`iq-submenu collapse ${menuState.log ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/admin/log">
                      <i className="ri-table-line"></i>Quản lý tổng
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={menuState.keys ? "parentActive" : ""}>
                <a
                    href="#keys"
                    className="iq-waves-effect"
                    onClick={() => toggleMenu("keys")}
                    aria-expanded={menuState.keys}
                >
                  <i className="ri-table-line iq-arrow-left"></i>
                  <span>Quản lý chữ ký</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </a>
                <ul
                    id="keys"
                    className={`iq-submenu collapse ${menuState.keys ? "show" : ""}`}
                    data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="/keys/list">
                      <i className="ri-table-line"></i>Danh sách khóa
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="p-3"></div>
        </div>
      </div>
  );
};

export default Sidebar;
