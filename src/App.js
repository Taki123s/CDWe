import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Sidebar from "./admin/Sidebar";
import MovieDetail from "./page/MovieDetail";
import ProductItem from "./page/ProductItem";
import AnimePage from "./component/Index";
import { CategoriesPage } from "./page/Categorie";
import { HeaderPage } from "./component/Header";
import ServicePack from "./component/ServicePack";
import MovieWatching from "./page/MovieWatching";
import LoginGoogle from "./component/LoginGoogleSuccess";
import LoginFacebook from "./component/LoginFacebookSuccess";
import PayPal from "./component/PayPal";
import ExecutePaymentComponent from "./component/ExecutePaymentComponent";
import Follow from "./page/Follow";
import AdminPanel from "./admin/HeaderAdmin";

function App() {
    // Kiểm tra nếu người dùng đang truy cập vào trang admin
    const isAdmin = window.location.pathname.startsWith("/admin");
    // Hiển thị Header nếu người dùng không phải là admin
    const showHeader = !isAdmin;

    return (
        <Router>
            {showHeader && <HeaderPage />} {/* Hiển thị Header nếu người dùng không phải là admin */}
            <Routes>

                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/item" element={<ProductItem />} />
                <Route path="/categories/:idGenre/:nameGenre" element={<CategoriesPage />} />
                <Route path="/" element={<AnimePage />} />
                <Route path="/index" element={<AnimePage />} />
                <Route path="/servicePack" element={<ServicePack />} />
                <Route path="/login-google" element={<LoginGoogle />} />
                <Route path="/login-facebook" element={<LoginFacebook />} />
                <Route path="/execute-payment" element={<ExecutePaymentComponent />} />
                <Route path="/movie/watching/:movieId/:chapterId" element={<MovieWatching />} />
                <Route path="/follow" element={<Follow />} />
                <Route path="/watching/:id/:chapter" element={<MovieWatching />} />
                <Route path="/PayPal" element={<PayPal />} />

            </Routes>
        </Router>
    );
}

export default App;
