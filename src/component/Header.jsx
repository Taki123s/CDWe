import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bootstrap.min.css";
import "./owl.carousel.min.css";
import "../css/ds/style.css";
import "../css/home.css";
import logo from "../img/logo.png";
import { LoginComponent } from "./LoginComponent";
import { getGenreList } from "../service/CategoryServices";
import { useTranslation, Trans } from "react-i18next";
import { Dropdown, Space, Typography } from "antd";

export const HeaderPage = () => {
  const lngs = {
    en: {
      nativeName: "English",
    },
    vi: {
      nativeName: "Vietnamese",
    },
  };

  const items = [
    {
      key: "1",
      label: "Vi",
      onClick: () => i18n.changeLanguage("vi"),
    },
    {
      key: "2",
      label: "En",
      onClick: () => i18n.changeLanguage("en"),
    },
  ];
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [language, setLanguage] = useState(lngs);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/movies/search?term=${searchTerm}`
        );
        console.log(response.data);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchTerm !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [genreList, setGenreList] = useState([]);
  const handleMouseEnter = () => {
    // setDropdownOpen(true);
  };
  useEffect(() => {
    getGenreList()
      .then((response) => {
        setGenreList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  useEffect(() => {
    const navbarAvatar = document.getElementById("navbar-avatar");
    const navbarRight = document.getElementById("navbar-right");
    const navbarLeft = document.getElementById("navbar-left");
    const close = document.getElementById("navbar-close");
    const navbarRes = document.getElementById("navbar-Res");

    const showNavbar = () => {
      navbarLeft.classList.toggle("-left-[300px]");
    };
    const toggleNavbar = () => {
      navbarRight.classList.toggle("-right-[300px]");
    };

    if (navbarAvatar) {
      navbarAvatar.addEventListener("click", toggleNavbar);
    }
    if (navbarRes) {
      navbarRes.addEventListener("click", showNavbar);
    }

    if (close) {
      close.addEventListener("click", toggleNavbar);
    }
    return () => {
      if (navbarAvatar) {
        navbarAvatar.removeEventListener("click", toggleNavbar);
      }
      if (close) {
        close.removeEventListener("click", toggleNavbar);
      }
      if (navbarRes) {
        navbarRes.removeEventListener("click", showNavbar);
      }
    };
  }, []);

  return (
    <header className="h-[60px]">
      <nav className="top-0 left-0 right-0 bg-white shadow dark:shadow-slate-700 bg-white dark:bg-slate-800 dark:shadow-slate-700  z-1000">
        <div className="container px-[10px] s1024:px-0 mx-auto h-[60px] flex s375:gap-3 items-center">
          <div className="navbar-brand h-[50px] w-[200px] s768:w-[180px] flex justify-between shrink-0 s1280:mr-2 s1366:mr-3 z-50">
            <a className="" href="/">
              <img className="h-full" src={logo} alt="/index" />
            </a>
            <div
              className="navbar-toggle h-[50px] p-[10px] flex items-center s768:hidden"
              id="navbar-Res"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div
            className="navbar-left overflow-hidden h-full s768:left-0 s768:h-[50px] shadow s768:relative w-[300px] s768:w-auto s768:h-auto s768:flex top-0 -left-[300px] bottom-0 bg-white s768:bg-transparent dark:s768:bg-transparent dark:bg-slate-800/90 dark:shadow-slate-700 s768:shadow-none s768:grow s768:overflow-visible pl-[10px] pr-0 pt-[60px] s768:p-0 z-40 transition-all duration-300"
            id="navbar-left"
          >
            <div className="navbar-close absolute top-4 right-4 hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="mt-[20px] pr-[10px] s768:mt-0 s768:pr-0 flex flex-col s768:flex-row s768:grow s768:items-center gap-4 s768:gap-2 s1280:gap-3">
              <div className="group/search navbar-search top-0 right-0 s768:order-last s768:ml-auto s1024:w-[300px] s1280:w-[320px]">
                <div className="search-box">
                  <input
                    className="rounded-full w-full h-[30px] text-[14px] font-extralight border-red-200 focus:ring-red-300 focus:border-red-200 s768:border-gray-200 s768:focus:ring-red-300 s768:focus:border-red-200 bg-transparent dark:bg-transparent dark:border-teal-500 s768:dark:border-gray-700 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                    id="search-box"
                    type="text"
                    name="search"
                    autoComplete="off"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-[2px] right-[2px] text-gray-200 group-hover/search:text-red-300 dark:text-slate-700 dark:group-hover/search:text-teal-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div
                  className="search-result pt-2 s768:bg-white s768:pl-2 s768:mt-[15px] dark:s768:bg-slate-800/90 s768:shadow s768:rounded-b-lg "
                  id="search-results"
                >
                  <div className="result-body scrollbar-hide h-auto max-h-none s768:max-h-[400px]">
                    {searchResults.map((result) => (
                      <li className="result-input" key={result.id}>
                        <a href={`/movie/${result.id}`}>
                          <img
                            className="image_result"
                            src={result.avatarMovie}
                          />
                          {result.name}
                        </a>
                      </li>
                    ))}
                    {searchResults.length !== 0 ? (
                      <a
                        className="view-all-result"
                        style={{ display: "block" }}
                      >
                        <Trans i18nKey={"viewall"}>
                     {t("viewall")}
                    </Trans>
                      </a>
                    ) : (
                      <a
                        className="view-all-result"
                        style={{ display: "none" }}
                      />
                    )}
                  </div>
                  <div className="result-noitem  font-extralight text-center"></div>
                  <div className="loading animate-spin "></div>
                </div>
              </div>
              <div className="navbar-item s768:h-[30px] dark:s768:border-gray-700 s768:border s768:rounded-full s768:hover:text-red-600 dark:s768:hover:text-teal-500 s768:order-1">
                <a
                  className="h-full flex gap-4 uppercase s768:normal-case items-center text-[14px]"
                  href="/index"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="shrink-0 w-5 h-5 s768:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                    />
                  </svg>
                  <span className="s768:px-3 s1024:px-2 s1280:px-3 s1366:px-4 s768:text-[14px]">
                    <Trans i18nKey={"menu.home"}>
                     {t("menu.home")}
                    </Trans>
                  </span>
                </a>
              </div>
              <div className="navbar-item s768:h-[30px] dark:s768:border-gray-700 s768:border s768:rounded-full s768:order-2">
                <a
                  className="h-full flex gap-4 uppercase s768:normal-case items-center text-[14px]"
                  href="#"
                  onMouseEnter={handleMouseEnter}
                  onClick={handleMouseEnter}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="shrink-0 w-5 h-5 s768:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                  <span className="s768:px-3 s1024:px-2 s1280:px-3 s1366:px-4 s768:text-[14px]">
                  <Trans i18nKey={"menu.categories"}>{t("menu.categories")}</Trans>

                  </span>
                </a>
                {dropdownOpen && (
                  <div
                    className="fixed bg-white shadow shadow-md mt-1 rounded-md py-1 z-10"
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="categories-dropdown">
                      {genreList?.map((genre) => {
                        return (
                          <li className="px-4 py-2 cursor-pointer categories-dropdown-item">
                            {genre.description}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              <div className="navbar-item s768:h-[30px] dark:s768:border-gray-700 s768:border s768:rounded-full s768:hover:text-red-600 dark:s768:hover:text-teal-500 s768:order-5">
                <a
                  className="h-full flex gap-4 uppercase s768:normal-case items-center text-[14px]"
                  href="/bang-xep-hang"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="shrink-0 w-5 h-5 s768:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"





                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                  <span className="s768:px-3 s1024:px-2 s1280:px-3 s1366:px-4 s768:text-[14px]">
                    BXH
                  </span>
                </a>
              </div>

              <div className="navbar-item s768:h-[30px] dark:s768:border-gray-700 s768:border s768:rounded-full s768:hover:text-red-600 dark:s768:hover:text-teal-500 s768:order-4">
                <a
                  className="h-full flex gap-4 uppercase s768:normal-case items-center text-[14px]"
                  href="https://englishehe.com"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="shrink-0 w-5 h-5 s768:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  <span className="s768:px-3 s1024:px-2 s1280:px-3 s1366:px-4 s768:text-[14px]">
                    English 1-1
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-user relative shrink-0 h-[40px] s1024:w-[145px] s1280:w-[294px] s1366:w-[320px] ml-auto flex justify-end gap-2">
            <div
              className="overflow-hidden w-[40px] h-[40px] p-[10px] rounded-full bg-gray-100 dark:bg-slate-700 user-theme hidden s360:block"
              id="user-theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-full h-full fill-slate-800 dark:fill-none dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>

            {/* <div class="flex w-2 gap">
            <div class="overflow-hidden w-[40px] h-[40px] rounded-full bg-gray-100 dark:bg-slate-700 flex justify-center items-center text-center">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" alt="Language" width="24px" fill="#666666">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                  </svg>
                </a>
              </div>
              <div class="overflow-hidden w-[40px] h-[40px] rounded-full bg-gray-100 dark:bg-slate-700 flex justify-center items-center text-center">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" alt="Language" width="24px" fill="#666666">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                  </svg>
                </a>
              </div>
          </div>        */}
            <div class="overflow-hidden w-[40px] h-[40px] rounded-full bg-gray-100 dark:bg-slate-700 flex justify-center items-center text-center">
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["2"],
                }}
              >
                <Typography.Link>
                  <Space>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        alt="Language"
                        width="24px"
                        fill="#666666"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                      </svg>
                    </a>
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>

            <div className="overflow-hidden w-[40px] h-[40px] rounded-full bg-gray-100 dark:bg-slate-700 flex justify-center items-center text-center">
              <a href="/page/chinh-sach-rieng-tu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </a>
            </div>
            <div
              className="navbar-avatar overflow-hidden w-[40px] h-[40px] rounded-full bg-gray-100 dark:bg-slate-700 flex justify-center items-center text-center"
              id="navbar-avatar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
          <LoginComponent />
        </div>

        <div></div>
      </nav>
    </header>
  );
};

export default HeaderPage;
