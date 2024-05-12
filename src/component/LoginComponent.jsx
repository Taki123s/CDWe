import React, { useState, useEffect } from "react";
import {login} from "../service/AuthServices"

export const LoginComponent = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
      const user = {"userName":username,"password":password}
      login(user).then((response)=>{
        localStorage.setItem('jwt_token', response.data.accessToken);
      }).catch(error=>{
        console.log(error)
        })
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div
      className="navbar-right fixed overflow-hidden h-full shadow w-[300px] top-0 bottom-0 bg-white dark:bg-slate-800/90 dark:shadow-slate-700 z-50 transition-all duration-300 right-0 -right-[300px]"
      id="navbar-right"
    >
      <div
        className="navbar-close absolute top-2 left-2 w-8 h-8 opacity-60"
        id="navbar-close"
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div className="navbar-user navbar-user-header px-3 pt-[55px] bg-white ">
        <div className="user-avatar big-avatar absolute top-3 right-3 w-20 h-20 flex items-center justify-center bg-gray-600 text-white rounded-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 inline-block self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            ></path>
          </svg>
        </div>
        <div className="navbar-user-welcome mb-4">
          <span className="w-[165px] line-clamp-1 text-[14px]">
            Chào khách!
          </span>
        </div>
        <div
          className="navbar-user-tab flex gap-4 h-6 mb-2 uppercase text-[13px] font-medium"
          id="chooseTab"
        >
          <div
            className={`navbar-user-tab-item navbar-tab-login ${
              activeTab === "login" ? "activated border-red-500" : ""
            } h-full cursor-pointer border-b-2`}
            data-tab="login"
            onClick={() => handleTabClick("login")}
          >
            Đăng nhập
          </div>
          <div
            className={`navbar-user-tab-item navbar-tab-signup ${
              activeTab === "signup" ? "activated border-red-500" : ""
            } h-full cursor-pointer border-b-2`}
            data-tab="signup"
            onClick={() => handleTabClick("signup")}
          >
            Đăng ký
          </div>
        </div>
      </div>
      {activeTab === "login" && (
        <form >
          <div
            className="navbar-user-body tab-login px-3 ps-container ps-theme-default"
            data-ps-id="1a9be0da-8957-4b2d-c90f-935a0efd2506"
            style={{ maxHeight: "842px" }}
          >
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Tên đăng nhập</label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6 rounded"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Mật khẩu</label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6  rounded"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3 flex justify-between text-[14px] font-light">
              <label className="navbar-form-checkbox flex items-center gap-2">
                <input
                  className="rounded text-teal-600 border-gray-400 focus:ring-0 focus:ring-offset-0 focus:border-gray-400  dark:border-teal-600 dark:focus:border-teal-500 dark:focus:ring-0 dark:focus:ring-offset-0 "
                  type="checkbox"
                  name="remember"
                  defaultChecked
                />
                <span>Ghi nhớ</span>
              </label>
              <a href="/quen-mat-khau" className="forgot-password">
                Quên mật khẩu
              </a>
            </div>
            <div className="navbar-form-group relative mb-3 hidden">
              <ul id="form-login-warning"></ul>
            </div>
            <div className="navbar-form-group relative mb-3 h-8 rounded bg-red-600/90 text-center text-white text-[14px] font-light submit">
              <input
                className="vuighe w-full h-full rounded cursor-pointer"
                id="login"
                type="button"
                name="submit"
                value="Đăng nhập"
                onClick={handleLogin}
              />
            </div>
            <hr className="mb-3 border-gray-300 dark:border-slate-600" />
            <div className="navbar-form-group relative mb-3 h-8 rounded bg-orange-600/90 text-center text-white text-[14px] font-light">
              <a
                className="social-login"
                href="https://vuighe3.com/dang-nhap-google"
              >
                <input
                  type="button"
                  className="google w-full h-full rounded cursor-pointer"
                  value="Đăng nhập với Google"
                />
              </a>
            </div>
            <div className="navbar-form-group relative mb-3 h-8 rounded bg-blue-600/90 text-center text-white text-[14px] font-light">
              <a
                className="social-login"
                href="https://vuighe3.com/dang-nhap-facebook"
              >
                <input
                  type="button"
                  className="facebook w-full h-full rounded cursor-pointer"
                  value="Đăng nhập với Facebook"
                />
              </a>
            </div>
            <div
              className="ps-scrollbar-x-rail"
              style={{ left: "0px", bottom: "0px" }}
            >
              <div
                className="ps-scrollbar-x"
                tabIndex="0"
                style={{ left: "0px", width: " 0px" }}
              ></div>
            </div>
            <div
              className="ps-scrollbar-y-rail"
              style={{ top: "0px", right: "0px" }}
            >
              <div
                className="ps-scrollbar-y"
                tabIndex="0"
                style={{ top: "0px", height: "0px" }}
              ></div>
            </div>
          </div>
        </form>
      )}
      {activeTab === "signup" && (
        <form>
          <div
            className="navbar-user-body tab-signup px-3 ps-container ps-theme-default"
            data-ps-id="02318dc8-08c6-d9ba-7736-072f7f3ee729"
            style={{ maxHeight: "842px" }}
          >
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Tên đăng nhập</label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6  rounded"
                type="text"
                name="username"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Mật khẩu</label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6  rounded"
                type="password"
                name="password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">
                Nhập lại mật khẩu
              </label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6  rounded"
                type="password"
                name="password_confirm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Tên hiển thị</label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6  rounded"
                type="text"
                name="full_name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Email</label>
              <input
                className="text-[14px] font-extralight w-full h-8 pl-6  rounded"
                type="text"
                name="email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 absolute left-1 bottom-2"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                ></path>
              </svg>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative mb-3">
              <label className="mb-1 block text-[14px]">Giới tính</label>
              <div className="flex items-center gap-5 text-[14px] font-light">
                <label className="navbar-form-radio flex items-center gap-2">
                  <input
                    className="rounded-full text-teal-600 border-gray-400 focus:ring-0 focus:ring-offset-0 focus:border-gray-400  dark:border-teal-600 dark:focus:border-teal-500 dark:focus:ring-0 dark:focus:ring-offset-0 "
                    type="radio"
                    name="gender"
                    value="1"
                  />
                  <span>Nam</span>
                </label>
                <label className="navbar-form-radio flex items-center gap-2">
                  <input
                    className="rounded-full text-teal-600 border-gray-400 focus:ring-0 focus:ring-offset-0 focus:border-gray-400  dark:border-teal-600 dark:focus:border-teal-500 dark:focus:ring-0 dark:focus:ring-offset-0 "
                    type="radio"
                    name="gender"
                    value="-1"
                  />
                  <span>Nữ</span>
                </label>
                <label className="navbar-form-radio flex items-center gap-2">
                  <input
                    className="rounded-full text-teal-600 border-gray-400 focus:ring-0 focus:ring-offset-0 focus:border-gray-400  dark:border-teal-600 dark:focus:border-teal-500 dark:focus:ring-0 dark:focus:ring-offset-0 "
                    type="radio"
                    name="gender"
                    value="0"
                    defaultChecked
                  />
                  <span>Không nói</span>
                </label>
              </div>
            </div>
            <div className="navbar-form-group relative birthday hidden mb-3">
              <div className="navbar-form-select day">
                <label className="mb-1 block text-[14px]">Ngày sinh</label>
                <input type="number" name="birthday" min="1" max="31" />
              </div>
              <div className="navbar-form-select month">
                <label className="mb-1 block text-[14px]">Tháng sinh</label>
                <input type="number" name="birthmonth" min="1" max="12" />
              </div>
              <div className="navbar-form-select year">
                <label className="mb-1 block text-[14px]">Năm sinh</label>
                <input type="number" name="birthyear" min="1970" max="2010" />
              </div>
              <span className="tip absolute top-1 right-0 text-[10px] text-red-500"></span>
            </div>
            <div className="navbar-form-group relative hidden mb-3">
              <ul id="form-signup-warning"></ul>
            </div>
            <div className="navbar-form-group relative mb-3 h-8 rounded bg-red-600/90 text-center text-white text-[14px] font-light submit">
              <input
                className="vuighe w-full h-full rounded"
                id="signup"
                type="button"
                name="submit"
                value="Đăng ký"
              />
            </div>
            <div
              className="ps-scrollbar-x-rail"
              style={{ left: "0px", bottom: "0px" }}
            >
              <div
                className="ps-scrollbar-x"
                tabIndex="0"
                style={{ left: "0px", width: "0px" }}
              ></div>
            </div>
            <div
              className="ps-scrollbar-y-rail"
              style={{ top: "0px", right: "0px" }}
            >
              <div
                className="ps-scrollbar-y"
                tabIndex="0"
                style={{ top: "0px", height: "0px" }}
              ></div>
            </div>
          </div>
        </form>
      )}
      <div className="loading hidden"></div>

      <div className="loading animate-spin hidden"></div>
    </div>
  );
};
