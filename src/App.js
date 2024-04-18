import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieDetail from './page/MovieDetail';
import ProductItem from './page/ProductItem';
import AnimePage from './component/Index';
import CategoriesPage from './component/Categorie';
import HeaderPage from './component/Header';
import Follow from './page/Follow';

function App() {
  return (
    
    <Router>
      <HeaderPage/>
      <Routes>
      <Route path="/follow" element={<Follow/>} /> 
      <Route path="/movie/:id" Component={MovieDetail} /> 
      <Route path="/item" element={ProductItem} /> 
      <Route path="/categories" element={<CategoriesPage/>}/>
      <Route path="/" element={<AnimePage/>} /> 
      <Route path="*" element={<AnimePage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
