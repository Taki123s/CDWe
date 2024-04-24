import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css'; // Import Bootstrap CSS



function ProductItem(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/anime')
    .then(response => {
      console.log('Response:', response.json);
      return response.json();
    })
    .then(data => {
      console.log('Data:', data);
      setMovies(data);
    })
      .catch(error => console.error('Error:', error));
  }, []); //

  return (
    <div className="row">
      {movies.map(movies => (
        <div className="col-lg-4 col-md-6 col-sm-6" key={movies.id}>
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${movies.image})` }}>
              <div className="ep">{movies.episode} / {movies.totalEpisodes}</div>
              <div className="view"><i className="fa fa-eye"></i> {movies.views}</div>
            </div>
            <div className="product__item__text">
              <h5><Link to="/" >{movies.name}</Link></h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
