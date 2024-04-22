import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieDetail from './page/MovieDetail';
import ProductItem from './page/ProductItem';
import AnimePage from './component/Index';
import CategoriesPage from './page/Categorie';
import HeaderPage from './component/Header';
import MovieWatching from './page/MovieWatching';
function App() {
  return (
    
    <Router>
      <HeaderPage/>
      <Routes>
      <Route path="/movie/:id" Component={MovieDetail} /> 
      <Route path="/item" element={ProductItem} /> 
      <Route path="/categories" element={<CategoriesPage/>}/>
      <Route path="/watching/:id/:chapter" element={<MovieWatching/>}/>
      <Route path="/" element={<AnimePage/>} /> 
      <Route path="*" element={<AnimePage />} />
      </Routes>
    </Router>
  );
}

export default App;
