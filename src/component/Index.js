import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import './bootstrap.min.css'; // Import Bootstrap CSS
import './owl.carousel.min.css';
import Carousel from './Carousel';
import Topview from './Topview'
import '/CDweb2/src/css/ds/style.css'
function AnimePage() {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('isAtoZ');

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('YOUR_API_ENDPOINT_HERE')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error:', error));
    }, []); // Chạy chỉ một lần khi component được render

    const fetchMovies = async (filter) => {
        try {
            const response = await axios.post('/anime-main/Index', { filter });
            setMovies(response.data.renderMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        
    <div id="ah_wrapper">       
             <section class="hero">
                <div class="container">

                        <div><Carousel/></div>
                </div>
             </section>    
     <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Mới cập nhật</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                </div>
              </div>
              <div className="row">
      {products.map(movie => (
        <div className="col-lg-4 col-md-6 col-sm-6" key={movie.id}>
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${movie.image})` }}>
              <div className="ep">{movie.episode} / {movie.totalEpisodes}</div>
              <div className="view"><i className="fa fa-eye"></i> {movie.views}</div>
            </div>
            <div className="product__item__text">
              <h5><a href="#">{movie.name}</a></h5>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Topview/>
    </div>
 
        
    );
}

export default AnimePage;
