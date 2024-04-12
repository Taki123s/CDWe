import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ movie }) {
  movie = {
      id: 1,
      imageUrl: "https://i.pinimg.com/564x/d6/a9/e4/d6a9e4d944352aae84ccbac8f8d655fa.jpg",
      episodes: 18,
      views: 9141,
      title: "The Seven Deadly Sins: Wrath of the Gods"
    };
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
<div className="product__item">
    <Link to={`/movie/${movie.id}`}>
        <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${movie.imageUrl})` }}>
          <div className="ep">{movie.episodes}</div>
          <div className="view"><i className="fa fa-eye"></i> {movie.views}</div>
        </div>
        <div className="product__item__text">
          <h5>{movie.title}</h5>
        </div>
      </Link>
    </div>
    </div>
    
  );
}

export default ProductItem;
