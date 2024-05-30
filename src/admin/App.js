import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import HeaderAdmin from './HeaderAdmin';
// import Dashboard from './Dashboard'; // Example component, you need to create/import this
// import UserAdd from './UserAdd'; // Example component, you need to create/import this
// import UserList from './UserList'; // Example component, you need to create/import this
// import MovieList from './MovieList'; // Example component, you need to create/import this
// import MovieAdd from './MovieAdd'; // Example component, you need to create/import this
// import GenreList from './GenreList'; // Example component, you need to create/import this
// import Login from './Login'; // Example component, you need to create/import this

import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'remixicon/fonts/remixicon.css';
import '../css/admin.css';

function AppContent() {
    const location = useLocation();
    const isAdmin = window.location.pathname.startsWith("/admin");

    return (
        <>
            {isAdmin && <Sidebar />}
            <Routes>
                {/*<Route path="/admin" element={<Login />} />*/}
                {/*<Route path="/admin/dashBoard" element={<Dashboard />} />*/}
                {/*<Route path="/admin/UserAdd" element={<UserAdd />} />*/}
                {/*<Route path="/admin/UserList" element={<UserList />} />*/}
                {/*<Route path="/admin/MovieList" element={<MovieList />} />*/}
                {/*<Route path="/admin/MovieAdd" element={<MovieAdd />} />*/}
                {/*<Route path="/admin/GenreList" element={<GenreList />} />*/}
                {/* Add more routes as needed */}
            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
