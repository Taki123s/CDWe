import React, { useState } from 'react';
import { FaHome,FaUser, FaLaptopCode  } from "react-icons/fa";
import { IoIosAddCircleOutline  } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";

const Sidebar = () => {
    // State to manage the visibility of child elements
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isDashboardMenuOpen, setDashboardMenuOpen] = useState(false);

    // Function to toggle the visibility of user menu
    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    }
    const toggleDashboardMenu=()=>{
        setDashboardMenuOpen(!isDashboardMenuOpen);
    }
 
    return (
        <div className="iq-sidebar">
            <div className="iq-navbar-logo d-flex justify-content-between">
                <a href="/admin/dashBoard" className="header-logo">
                    <img src="/anime-main/img/logonweb.png" className="img-fluid rounded" alt="" />
                    <span>AnimeWeb</span>
                </a>
            </div>
            <div id="sidebar-scrollbar">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className={isDashboardMenuOpen ? "parentActive active" : "parentActive"} onClick={toggleDashboardMenu}>
                            <a href="#dashboard" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true">
                            <FaHome />                                
                            <span>Bảng điều khiển</span>
                            </a>
                            <ul id="dashboard" className={isDashboardMenuOpen ? "iq-submenu collapse show" : "iq-submenu collapse"}data-parent="#iq-sidebar-toggle">
                                <li className="childActive">
                                    <a href="/admin/dashBoard">
                                        <FaLaptopCode/>
                                        Thống kê
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={isUserMenuOpen ? "parentActive active" : "parentActive"}>
                            <a href="#userinfo" className="iq-waves-effect" data-toggle="collapse" aria-expanded={isUserMenuOpen} onClick={toggleUserMenu}>
                               <FaUser/>
                                <span>Quản lý người dùng</span>
                                <i className={isUserMenuOpen ? "ri-arrow-down-s-line iq-arrow-right" : "ri-arrow-right-s-line iq-arrow-right"}></i>
                            </a>
                            <ul id="userinfo" className={isUserMenuOpen ? "iq-submenu collapse show" : "iq-submenu collapse"} data-parent="#iq-sidebar-toggle">
                                <li className="childActive">
                                    <a href="/admin/UserAdd">
                                    <IoIosAddCircleOutline  />

                                        Thêm người dùng
                                    </a>
                                </li>
                                <li className="childActive">
                                    <a href="/admin/UserList">
                                       <CiBoxList/>
                                        Danh sách người dùng
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
}

export default Sidebar;
