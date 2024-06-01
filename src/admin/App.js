import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderAdmin from "./HeaderAdmin";
// import Dashboard from './Dashboard'; // Example component, you need to create/import this
// import UserAdd from './UserAdd'; // Example component, you need to create/import this
// import UserList from './UserList'; // Example component, you need to create/import this
// import MovieList from './MovieList'; // Example component, you need to create/import this
// import MovieAdd from './MovieAdd'; // Example component, you need to create/import this
// import GenreList from './GenreList'; // Example component, you need to create/import this
// import Login from './Login'; // Example component, you need to create/import this
import AddUserForm from "./user/AddUser";
import "../component/bootstrap.min.css"
// import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
// import "remixicon/fonts/remixicon.css";
import "./css/style.css";
import 'boxicons'
import "./css/main.css"
import "./images/favicon.ico"
import "./css/typography.css"
import "./css/responsive.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import 'jquery-confirm';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
function App() {
  return (
    <BrowserRouter>
    <HeaderAdmin />
      <Sidebar />
      <Routes>
        <Route path="/admin/add" element={<AddUserForm />} />
        {/*<Route path="/admin" element={<Login />} />*/}
        {/*<Route path="/admin/dashBoard" element={<Dashboard />} />*/}
        {/*<Route path="/admin/UserAdd" element={<UserAdd />} />*/}
        {/*<Route path="/admin/UserList" element={<UserList />} />*/}
        {/*<Route path="/admin/MovieList" element={<MovieList />} />*/}
        {/*<Route path="/admin/MovieAdd" element={<MovieAdd />} />*/}
        {/*<Route path="/admin/GenreList" element={<GenreList />} />*/}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
