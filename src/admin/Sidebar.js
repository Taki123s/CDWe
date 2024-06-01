import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="iq-sidebar">
      <div className="iq-navbar-logo d-flex justify-content-between">
        <a href="${Dashboard}" className="header-logo">
          {" "}
          <img
            src="/anime-main/img/logonweb.png"
            className="img-fluid rounded"
            alt=""
          />{" "}
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
            <li className="parentActive">
              <a
                href="#dashboard"
                className="iq-waves-effect "
                data-toggle="collapse"
                aria-expanded="true"
              >
                <span className="ripple rippleEffect"></span>
                <i className="las la-home iq-arrow-left"></i>
                <span>Bảng điều khiển</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="dashboard"
                className="iq-submenu collapse show"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${Dashboard}">
                    <i className="las la-laptop-code"></i>Thống kê
                  </a>
                </li>
              </ul>
            </li>

            <li className="parentActive">
              <a
                href="#userinfo"
                className="iq-waves-effect"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <span className="ripple rippleEffect"></span>
                <i className="las la-user-tie iq-arrow-left"></i>
                <span>Quản lý người dùng</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="userinfo"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${userAdd}">
                    <i className="las la-plus-circle"></i>Thêm người dùng
                  </a>
                </li>
                <li className="childActive">
                  <a href="${userList}">
                    <i className="las la-th-list"></i>Danh sách người dùng
                  </a>
                </li>
              </ul>
            </li>
            <li className="parentActive">
              <a
                href="https://analytics.google.com/analytics/web/#/p380852987/reports/reportinghub?params=_u..nav%3Dmaui%26_r.14..selmet%3D%5B%22conversions%22%5D"
                target="_blank"
                className="iq-waves-effect"
              >
                <span className="ripple rippleEffect"></span>
                <i className="las la-user-tie iq-arrow-left"></i>
                <span>Google Analytics</span>
              </a>
            </li>

            <li className="parentActive">
              <a
                href="#movie"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-pie-chart-box-line iq-arrow-left"></i>
                <span>Quản lý phim</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="movie"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${MovieList}">
                    <i className="ri-folder-chart-2-line"></i>Danh sách phim
                  </a>
                </li>
                <li className="childActive">
                  <a href="${MovieAdd}">
                    <i className="ri-folder-chart-2-line"></i>Nhập phim mới
                  </a>
                </li>
                <li className="childActive">
                  <a href="${GenreList}">
                    <i className="ri-folder-chart-2-line"></i>Danh sách thể loại
                  </a>
                </li>
              </ul>
            </li>

            <li className="parentActive">
              <a
                href="#supplier"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-pages-line iq-arrow-left"></i>
                <span>Quản lý nhà cung cấp</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="supplier"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${SupplierList}">
                    <i className="ri-folder-chart-2-line"></i>Danh sách nhà cung
                    cấp
                  </a>
                </li>
              </ul>
            </li>

            <li className="parentActive">
              <a
                href="#producer"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-pages-line iq-arrow-left"></i>
                <span>Quản lý nhà sản xuất</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="producer"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${ProducerList}">
                    <i className="ri-folder-chart-2-line"></i>Danh sách nhà sản
                    xuất
                  </a>
                </li>
              </ul>
            </li>

            <li className="parentActive">
              <a
                href="#tables"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-table-line iq-arrow-left"></i>
                <span>Lịch sử</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="tables"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${WishList}">
                    <i className="ri-table-line"></i>Lịch sử mua phim
                  </a>
                </li>
                <li className="childActive">
                  <a href="${transactionHistory}">
                    <i className="ri-database-line"></i>Lịch sử giao dịch
                  </a>
                </li>
                <li className="childActive">
           
                  <a href="${importCoupons}">
                    <i className="ri-folder-chart-2-line"></i>
                    Lịch sử nhập phim
                  </a>
                </li>
              </ul>
            </li>
            <li className="parentActive">
              <a
                href="#bonus"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-table-line iq-arrow-left"></i>
                <span>Quản lý khuyến mãi</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="bonus"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${bonusList}">
                    <i className="ri-table-line"></i>Danh sách khuyến mãi
                  </a>
                </li>
              </ul>
            </li>
            <li className="parentActive">
              <a
                href="#role"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-table-line iq-arrow-left"></i>
                <span>Quản lý vai trò</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="role"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${rolePage}">
                    <i className="ri-table-line"></i>Quản lý tổng
                  </a>
                </li>
                <li className="childActive">
                  <a href="${addRole}">
                    <i className="ri-table-line"></i>Tạo vai trò mới
                  </a>
                </li>
              </ul>
            </li>
            <li className="parentActive">
              <a
                href="#log"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-table-line iq-arrow-left"></i>
                <span>Quản lý Log</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="log"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${logList}">
                    <i className="ri-table-line"></i>Quản lý tổng
                  </a>
                </li>
              </ul>
            </li>
            <li className="parentActive">
              <a
                href="#keys"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-table-line iq-arrow-left"></i>
                <span>Quản lý chữ ký</span>
                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
              </a>
              <ul
                id="keys"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="childActive">
                  <a href="${ViewListKey}">
                    <i className="ri-table-line"></i>Danh sách khóa
                  </a>
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
