import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieDetail from './page/MovieDetail';
import ProductItem from './page/ProductItem';
import AnimePage from './component/Index';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/movie/:id" Component={MovieDetail} /> 
      <Route path="/item" element={ProductItem} /> 
      <Route path="/" element={<AnimePage/>} /> 
      <Route path="*" element={<AnimePage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
