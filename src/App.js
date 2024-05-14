import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Follow from './page/Follow';
import MovieDetail from "./page/MovieDetail";
import ProductItem from "./page/ProductItem";
import AnimePage from "./component/Index";
import {CategoriesPage} from "./page/Categorie";
import {HeaderPage} from "./component/Header";
import ServicePack from "./component/ServicePack";
import MovieWatching from "./page/MovieWatching";
import React from 'react';
import AdminPanel from "./admin/user/AdminPanel"

function App() {
  return (

    <Router>
      <HeaderPage/>
      <Routes>
        <Route path="/movie/:id" Component={MovieDetail} />
        <Route path="/item" element={ProductItem} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/" element={<AnimePage />} />
        <Route path="/servicePack" element={<ServicePack />} />
        <Route path="*" element={<AnimePage />} />
        <Route path="/movie/watching/:movieId/:chapterId" element={<MovieWatching />} />
      <Route path="/AdminPanel" element={<AdminPanel/>} />

      <Route path="/follow" element={<Follow/>} />
      <Route path="/movie/:id" Component={MovieDetail} />
      <Route path="/item" element={ProductItem} />
      <Route path="/categories" element={<CategoriesPage/>}/>
      <Route path="/" element={<AnimePage/>} />
      <Route path="*" element={<AnimePage />} />
      <Route path="/servicePack" element={<ServicePack />} />
      <Route path="/watching/:id/:chapter" element={<MovieWatching />} />
      </Routes>
    </Router>

  );
}

export default App;
