import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddUserForm from "./user/AddUser";
import "boxicons";
import HeaderAdmin from "./HeaderAdmin";
import "./css/main.css";
import "./images/favicon.ico";
import "./css/typography.css";
import "./css/responsive.css";
import ServicePacks from "./component/packed-service";
import Logs from "./component/log";
import UserPacked from "./component/user-packed";
import "../css/bootstrap.min.css";
// import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
// import "remixicon/fonts/remixicon.css";
import "./css/style.css";
import "boxicons";
import "./css/main.css";
import "./images/favicon.ico";
import "./css/typography.css";
import "./css/responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import "jquery-confirm";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AddChapter } from "./movie/AddChapter";
import { ListSerie } from "./movie/ListSerie";
import { ListMovie } from "./movie/ListMovie";
import { AddMovie } from "./movie/AddMovie";
import UserAdd from "./user/AddUser";
import UserList from "./user/ListUser";
import EditUser from "./user/EditUser";
import "./css/bootstrap.min.css";
import "./css/style.css";
function App() {
  return (
    <BrowserRouter>
      <HeaderAdmin />
      <Sidebar />
      <div className="wrapper">
        <div className="content-page" id="content-page">
          <div className="container-fluid">
            <Routes>
              {/* <Route path="/admin/add" element={<AddUserForm />} /> */}
              <Route path="/admin/packed-service" element={<ServicePacks />} />

              <Route path="/admin/user-packed" element={<UserPacked />} />
              {/* <Route path="/admin/add" element={<AddUserForm />} /> */}
              <Route path="/admin/upload" element={<AddChapter />} />
              <Route path="/admin/listSerie" element={<ListSerie />} />
              <Route path="/admin/listMovie" element={<ListMovie />} />
              <Route path="/admin/addMovie" element={<AddMovie />} />
              <Route path="/admin/packed-service" element={<ServicePacks />} />
              <Route path="/admin/log" element={<Logs />} />
              <Route path="/admin/user-packed" element={<UserPacked />} />
              <Route path="/admin/adduser" element={<UserAdd />} />
              <Route path="/admin/UserList" element={<UserList />} />
              <Route path="/admin/EditUser/:id" element={<EditUser />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
