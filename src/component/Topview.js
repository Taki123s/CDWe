import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './bootstrap.min.css';
import './bootstrap.min.css'; // Import Bootstrap CSS

const Topview = () => {
  const { t } = useTranslation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadTopViewMovies();
  }, []);

  const loadTopViewMovies = async (action) => {
    try {
      const response = await axios.get('http://localhost:8080/topView', {
        params: { action: action }
      });
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching top view movies:', error);
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="product__sidebar">
        <div className="product__sidebar__view">
          <div className="section-title">
            <h5>{t('Topview')}</h5>
          </div>
          <ul className="filter__controls">
            <li className="active" data-filter=".day" onClick={() => loadTopViewMovies('topDay')}>{t('day')}</li>
            <li data-filter=".month" onClick={() => loadTopViewMovies('topMonth')}>{t('month')}</li>
            <li data-filter=".years" onClick={() => loadTopViewMovies('topYear')}>{t('year')}</li>
          </ul>
          <br />
          <div className="filter__gallery">
            {movies.map(movie => (
              <div key={movie.id} className="product__sidebar__view__item set-bg mix day"
                style={{ backgroundImage: `url(${movie.avatars[0].name})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="ep">{movie.currentEpisode}/{movie.totalEpisode}</div>
                <div className="rate">{movie.avgRate}<i className="fa fa-star" style={{ color: '#f3da35' }}></i></div>
                <div className="view" style={{ bottom: '10px', right: '10px', top: 'unset' }}>
                  <i className="fa fa-eye"></i> {movie.views}
                </div>
                <h5><a href={`/movieDetail?idMovie=${movie.id}`}>{movie.name}</a></h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topview
;
