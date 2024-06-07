import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddUserForm from "./user/AddUser";
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
import "../css/bootstrap.min.css";
import "./css/style.css";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
      <Sidebar />
        <div className="content-page" id="content-page">
          <div className="container-fluid">
            <Routes>
              <Route path="/admin/add" element={<AddUserForm />} />
              <Route path="/admin/upload" element={<AddChapter />} />
              <Route path="/admin/listSerie" element={<ListSerie />} />
              <Route path="/admin/listMovie" element={<ListMovie/>}/>
              <Route path="/admin/addMovie" element={<AddMovie/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
